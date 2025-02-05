import { createFilter } from '@rollup/pluginutils';
import Compiler from '@enhavo/dependency-injection/compiler/Compiler.js';
import ContainerBuilder from '@enhavo/dependency-injection/container/ContainerBuilder.js';
import Loader from '@enhavo/dependency-injection/loader/Loader.js';
import fs from 'fs';

const defaults = {
    transform: null,
    extensions: ['.di.yaml']
};

export default function (opts = {}) {
    const options = Object.assign({}, defaults, opts);
    const { extensions } = options;
    const filter = createFilter(options.include, options.exclude);

    return {
        name: 'container-di',
        async transform(content, id) {
            if (!extensions.some((ext) => id.toLowerCase().endsWith(ext))) return null;
            if (!filter(id)) return null;

            let builder = new ContainerBuilder;
            let loader = new Loader();
            loader.loadFile(id, builder)

            for (let loadedFile of loader.loadedFiles) {
                if (fs.existsSync(loadedFile) && fs.lstatSync(loadedFile).isFile()) {
                    this.addWatchFile(loadedFile);
                }
            }

            await builder.prepare();
            let compiler = new Compiler;
            let resultData = compiler.compile(builder);

            return {
                code: resultData,
                map: null,
            };
        },
    };
}
