import { AbstractAction } from "@enhavo/app/action/model/AbstractAction";
import {AxiosResponseHandler} from "@enhavo/app/util/AxiosResponseHandler";
import axios from 'axios';
import $ from 'jquery';

export class DownloadAction extends AbstractAction
{
    public url: string;
    public ajax: boolean;

    execute(): void
    {
        if (!this.ajax) {
            var anchor = document.createElement('a');
            anchor.href = this.url;
            anchor.download = '';
            anchor.click();
            return;
        }

        axios.post(this.url, $('form').serialize(), {
            headers: {'Content-Type': 'multipart/form-data' },
            responseType: 'arraybuffer'
        })
        .then((response) => {
            AxiosResponseHandler.download(response);
        })
        .catch(function (response) {
            //handle error
            console.error(response);
        });
    }
}