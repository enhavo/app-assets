import path from 'node:path'
import { fileURLToPath } from 'node:url';

export function fantasticonSetting(setting)
{
    let defaultSettings =  {
        name: "icon",
        inputDir: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../assets/icons'),
        fontTypes: ["ttf", "woff", "woff2"],
        assetTypes: ["css", "html"],
        prefix: 'icon',
        tag: '*',
        templates: {
            html: path.resolve(import.meta.dirname, './fantasticon-plugin/html.hbs'),
        },
        codepoints: {
            '3d_rotation': 0xf101,
            'ac_unit': 0xf102,
            'access_alarm': 0xf103,
            'access_alarms': 0xf104,
            'access_time': 0xf105,
            'accessibility': 0xf106,
            'accessible': 0xf107,
            'account_balance_wallet': 0xf108,
            'account_balance': 0xf109,
            'account_box': 0xf10a,
            'account_circle': 0xf10b,
            'adb': 0xf10c,
            'add_a_photo': 0xf10d,
            'add_alarm': 0xf10e,
            'add_alert': 0xf10f,
            'add_box': 0xf110,
            'add_circle_outline': 0xf111,
            'add_circle': 0xf112,
            'add_location': 0xf113,
            'add_shopping_cart': 0xf114,
            'add_to_photos': 0xf115,
            'add_to_queue': 0xf116,
            'add': 0xf117,
            'adjust': 0xf118,
            'airline_seat_flat_angled': 0xf119,
            'airline_seat_flat': 0xf11a,
            'airline_seat_individual_suite': 0xf11b,
            'airline_seat_legroom_extra': 0xf11c,
            'airline_seat_legroom_normal': 0xf11d,
            'airline_seat_legroom_reduced': 0xf11e,
            'airline_seat_recline_extra': 0xf11f,
            'airline_seat_recline_normal': 0xf120,
            'airplanemode_active': 0xf121,
            'airplanemode_inactive': 0xf122,
            'airplay': 0xf123,
            'airport_shuttle': 0xf124,
            'alarm_add': 0xf125,
            'alarm_off': 0xf126,
            'alarm_on': 0xf127,
            'alarm': 0xf128,
            'album': 0xf129,
            'all_inclusive': 0xf12a,
            'all_out': 0xf12b,
            'android': 0xf12c,
            'announcement': 0xf12d,
            'apps': 0xf12e,
            'archive': 0xf12f,
            'arrow_back': 0xf130,
            'arrow_downward': 0xf131,
            'arrow_drop_down_circle': 0xf132,
            'arrow_drop_down': 0xf133,
            'arrow_drop_up': 0xf134,
            'arrow_forward': 0xf135,
            'arrow_upward': 0xf136,
            'art_track': 0xf137,
            'aspect_ratio': 0xf138,
            'assessment': 0xf139,
            'assignment_ind': 0xf13a,
            'assignment_late': 0xf13b,
            'assignment_return': 0xf13c,
            'assignment_returned': 0xf13d,
            'assignment_turned_in': 0xf13e,
            'assignment': 0xf13f,
            'assistant_photo': 0xf140,
            'assistant': 0xf141,
            'attach_file': 0xf142,
            'attach_money': 0xf143,
            'attachment': 0xf144,
            'audiotrack': 0xf145,
            'autorenew': 0xf146,
            'av_timer': 0xf147,
            'backspace': 0xf148,
            'backup': 0xf149,
            'battery_20': 0xf14a,
            'battery_30': 0xf14b,
            'battery_50': 0xf14c,
            'battery_60': 0xf14d,
            'battery_80': 0xf14e,
            'battery_90': 0xf14f,
            'battery_alert': 0xf150,
            'battery_charging_20': 0xf151,
            'battery_charging_30': 0xf152,
            'battery_charging_50': 0xf153,
            'battery_charging_60': 0xf154,
            'battery_charging_80': 0xf155,
            'battery_charging_90': 0xf156,
            'battery_charging_full': 0xf157,
            'battery_full': 0xf158,
            'battery_std': 0xf159,
            'battery_unknown': 0xf15a,
            'beach_access': 0xf15b,
            'beenhere': 0xf15c,
            'block': 0xf15d,
            'bluetooth_audio': 0xf15e,
            'bluetooth_connected': 0xf15f,
            'bluetooth_disabled': 0xf160,
            'bluetooth_searching': 0xf161,
            'bluetooth': 0xf162,
            'blur_circular': 0xf163,
            'blur_linear': 0xf164,
            'blur_off': 0xf165,
            'blur_on': 0xf166,
            'book': 0xf167,
            'bookmark_border': 0xf168,
            'bookmark': 0xf169,
            'border_all': 0xf16a,
            'border_bottom': 0xf16b,
            'border_clear': 0xf16c,
            'border_color': 0xf16d,
            'border_horizontal': 0xf16e,
            'border_inner': 0xf16f,
            'border_left': 0xf170,
            'border_outer': 0xf171,
            'border_right': 0xf172,
            'border_style': 0xf173,
            'border_top': 0xf174,
            'border_vertical': 0xf175,
            'branding_watermark': 0xf176,
            'brightness_1': 0xf177,
            'brightness_2': 0xf178,
            'brightness_3': 0xf179,
            'brightness_4': 0xf17a,
            'brightness_5': 0xf17b,
            'brightness_6': 0xf17c,
            'brightness_7': 0xf17d,
            'brightness_auto': 0xf17e,
            'brightness_high': 0xf17f,
            'brightness_low': 0xf180,
            'brightness_medium': 0xf181,
            'broken_image': 0xf182,
            'brush': 0xf183,
            'bubble_chart': 0xf184,
            'bug_report': 0xf185,
            'build': 0xf186,
            'burst_mode': 0xf187,
            'business_center': 0xf188,
            'business': 0xf189,
            'cached': 0xf18a,
            'cake': 0xf18b,
            'call_end': 0xf18c,
            'call_made': 0xf18d,
            'call_merge': 0xf18e,
            'call_missed_outgoing': 0xf18f,
            'call_missed': 0xf190,
            'call_received': 0xf191,
            'call_split': 0xf192,
            'call_to_action': 0xf193,
            'call': 0xf194,
            'camera_alt': 0xf195,
            'camera_front': 0xf196,
            'camera_rear': 0xf197,
            'camera_roll': 0xf198,
            'camera': 0xf199,
            'cancel': 0xf19a,
            'card_giftcard': 0xf19b,
            'card_membership': 0xf19c,
            'card_travel': 0xf19d,
            'casino': 0xf19e,
            'cast_connected': 0xf19f,
            'cast': 0xf1a0,
            'center_focus_strong': 0xf1a1,
            'center_focus_weak': 0xf1a2,
            'change_history': 0xf1a3,
            'chat_bubble_outline': 0xf1a4,
            'chat_bubble': 0xf1a5,
            'chat': 0xf1a6,
            'check_box_outline_blank': 0xf1a7,
            'check_box': 0xf1a8,
            'check_circle': 0xf1a9,
            'check': 0xf1aa,
            'chevron_left': 0xf1ab,
            'chevron_right': 0xf1ac,
            'child_care': 0xf1ad,
            'child_friendly': 0xf1ae,
            'chrome_reader_mode': 0xf1af,
            'class': 0xf1b0,
            'clear_all': 0xf1b1,
            'clear': 0xf1b2,
            'close': 0xf1b3,
            'closed_caption': 0xf1b4,
            'cloud_circle': 0xf1b5,
            'cloud_done': 0xf1b6,
            'cloud_download': 0xf1b7,
            'cloud_off': 0xf1b8,
            'cloud_queue': 0xf1b9,
            'cloud_upload': 0xf1ba,
            'cloud': 0xf1bb,
            'code': 0xf1bc,
            'collections': 0xf1bd,
            'color_lens': 0xf1be,
            'colorize': 0xf1bf,
            'comment': 0xf1c0,
            'compare_arrows': 0xf1c1,
            'compare': 0xf1c2,
            'computer': 0xf1c3,
            'confirmation_number': 0xf1c4,
            'contact_mail': 0xf1c5,
            'contact_phone': 0xf1c6,
            'contacts': 0xf1c7,
            'content_copy': 0xf1c8,
            'content_cut': 0xf1c9,
            'content_paste': 0xf1ca,
            'control_point_duplicate': 0xf1cb,
            'control_point': 0xf1cc,
            'copyright': 0xf1cd,
            'create_new_folder': 0xf1ce,
            'create': 0xf1cf,
            'credit_card': 0xf1d0,
            'crop_16_9': 0xf1d1,
            'crop_3_2': 0xf1d2,
            'crop_5_4': 0xf1d3,
            'crop_7_5': 0xf1d4,
            'crop_din': 0xf1d5,
            'crop_free': 0xf1d6,
            'crop_landscape': 0xf1d7,
            'crop_original': 0xf1d8,
            'crop_portrait': 0xf1d9,
            'crop_rotate': 0xf1da,
            'crop_square': 0xf1db,
            'crop': 0xf1dc,
            'dashboard': 0xf1dd,
            'data_usage': 0xf1de,
            'date_range': 0xf1df,
            'dehaze': 0xf1e0,
            'delete_forever': 0xf1e1,
            'delete_sweep': 0xf1e2,
            'delete': 0xf1e3,
            'description': 0xf1e4,
            'desktop_mac': 0xf1e5,
            'desktop_windows': 0xf1e6,
            'details': 0xf1e7,
            'developer_board': 0xf1e8,
            'developer_mode': 0xf1e9,
            'devices_other': 0xf1ea,
            'devices': 0xf1eb,
            'dialer_sip': 0xf1ec,
            'dialpad': 0xf1ed,
            'directions_bike': 0xf1ee,
            'directions_boat': 0xf1ef,
            'directions_bus': 0xf1f0,
            'directions_car': 0xf1f1,
            'directions_railway': 0xf1f2,
            'directions_run': 0xf1f3,
            'directions_subway': 0xf1f4,
            'directions_transit': 0xf1f5,
            'directions_walk': 0xf1f6,
            'directions': 0xf1f7,
            'disc_full': 0xf1f8,
            'dns': 0xf1f9,
            'do_not_disturb_alt': 0xf1fa,
            'do_not_disturb_off': 0xf1fb,
            'do_not_disturb_on': 0xf1fc,
            'do_not_disturb': 0xf1fd,
            'dock': 0xf1fe,
            'domain': 0xf1ff,
            'done_all': 0xf200,
            'done': 0xf201,
            'donut_large': 0xf202,
            'donut_small': 0xf203,
            'drafts': 0xf204,
            'drag_handle': 0xf205,
            'drive_eta': 0xf206,
            'dvr': 0xf207,
            'edit_location': 0xf208,
            'edit': 0xf209,
            'email': 0xf20a,
            'enhanced_encryption': 0xf20b,
            'equalizer': 0xf20c,
            'error_outline': 0xf20d,
            'error': 0xf20e,
            'euro_symbol': 0xf20f,
            'ev_station': 0xf210,
            'event_available': 0xf211,
            'event_busy': 0xf212,
            'event_note': 0xf213,
            'event_seat': 0xf214,
            'event': 0xf215,
            'exit_to_app': 0xf216,
            'expand_less': 0xf217,
            'expand_more': 0xf218,
            'explicit': 0xf219,
            'explore': 0xf21a,
            'exposure_neg_1': 0xf21b,
            'exposure_neg_2': 0xf21c,
            'exposure_plus_1': 0xf21d,
            'exposure_plus_2': 0xf21e,
            'exposure_zero': 0xf21f,
            'exposure': 0xf220,
            'extension': 0xf221,
            'face': 0xf222,
            'fast_forward': 0xf223,
            'fast_rewind': 0xf224,
            'favorite_border': 0xf225,
            'favorite': 0xf226,
            'featured_play_list': 0xf227,
            'featured_video': 0xf228,
            'feedback': 0xf229,
            'fiber_dvr': 0xf22a,
            'fiber_manual_record': 0xf22b,
            'fiber_new': 0xf22c,
            'fiber_pin': 0xf22d,
            'fiber_smart_record': 0xf22e,
            'file_audio': 0xf22f,
            'file_code': 0xf230,
            'file_document': 0xf231,
            'file_download': 0xf232,
            'file_pdf': 0xf233,
            'file_ppt': 0xf234,
            'file_text': 0xf235,
            'file_upload': 0xf236,
            'file_video': 0xf237,
            'file_xls': 0xf238,
            'filter_1': 0xf239,
            'filter_2': 0xf23a,
            'filter_3': 0xf23b,
            'filter_4': 0xf23c,
            'filter_5': 0xf23d,
            'filter_6': 0xf23e,
            'filter_7': 0xf23f,
            'filter_8': 0xf240,
            'filter_9_plus': 0xf241,
            'filter_9': 0xf242,
            'filter_b_and_w': 0xf243,
            'filter_center_focus': 0xf244,
            'filter_drama': 0xf245,
            'filter_frames': 0xf246,
            'filter_hdr': 0xf247,
            'filter_list': 0xf248,
            'filter_none': 0xf249,
            'filter_tilt_shift': 0xf24a,
            'filter_vintage': 0xf24b,
            'filter': 0xf24c,
            'find_in_page': 0xf24d,
            'find_replace': 0xf24e,
            'fingerprint': 0xf24f,
            'first_page': 0xf250,
            'fitness_center': 0xf251,
            'flag': 0xf252,
            'flare': 0xf253,
            'flash_auto': 0xf254,
            'flash_off': 0xf255,
            'flash_on': 0xf256,
            'flight_land': 0xf257,
            'flight_takeoff': 0xf258,
            'flight': 0xf259,
            'flip_to_back': 0xf25a,
            'flip_to_front': 0xf25b,
            'flip': 0xf25c,
            'folder_open': 0xf25d,
            'folder_shared': 0xf25e,
            'folder_special': 0xf25f,
            'folder': 0xf260,
            'format_align_center': 0xf261,
            'format_align_justify': 0xf262,
            'format_align_left': 0xf263,
            'format_align_right': 0xf264,
            'format_bold': 0xf265,
            'format_clear': 0xf266,
            'format_color_fill': 0xf267,
            'format_color_reset': 0xf268,
            'format_color_text': 0xf269,
            'format_indent_decrease': 0xf26a,
            'format_indent_increase': 0xf26b,
            'format_italic': 0xf26c,
            'format_line_spacing': 0xf26d,
            'format_list_bulleted': 0xf26e,
            'format_list_numbered': 0xf26f,
            'format_paint': 0xf270,
            'format_quote': 0xf271,
            'format_shapes': 0xf272,
            'format_size': 0xf273,
            'format_strikethrough': 0xf274,
            'format_textdirection_l_to_r': 0xf275,
            'format_textdirection_r_to_l': 0xf276,
            'format_underlined': 0xf277,
            'forum': 0xf278,
            'forward_10': 0xf279,
            'forward_30': 0xf27a,
            'forward_5': 0xf27b,
            'forward': 0xf27c,
            'free_breakfast': 0xf27d,
            'fullscreen_exit': 0xf27e,
            'fullscreen': 0xf27f,
            'functions': 0xf280,
            'g_translate': 0xf281,
            'gamepad': 0xf282,
            'games': 0xf283,
            'gavel': 0xf284,
            'gesture': 0xf285,
            'get_app': 0xf286,
            'golf_course': 0xf287,
            'gps_fixed': 0xf288,
            'gps_not_fixed': 0xf289,
            'gps_off': 0xf28a,
            'grade': 0xf28b,
            'gradient': 0xf28c,
            'grain': 0xf28d,
            'grapheq': 0xf28e,
            'grid_off': 0xf28f,
            'grid_on': 0xf290,
            'group_add': 0xf291,
            'group_work': 0xf292,
            'group': 0xf293,
            'hdr_off': 0xf294,
            'hdr_on': 0xf295,
            'hdr_strong': 0xf296,
            'hdr_weak': 0xf297,
            'headset_mic': 0xf298,
            'headset': 0xf299,
            'healing': 0xf29a,
            'hearing': 0xf29b,
            'help': 0xf29c,
            'high_quality': 0xf29d,
            'highlight_off': 0xf29e,
            'highlight': 0xf29f,
            'history': 0xf2a0,
            'home': 0xf2a1,
            'hot_tub': 0xf2a2,
            'hotel': 0xf2a3,
            'hourglass_empty': 0xf2a4,
            'hourglass_full': 0xf2a5,
            'http': 0xf2a6,
            'https': 0xf2a7,
            'image_aspect_ratio': 0xf2a8,
            'image': 0xf2a9,
            'import_contacts': 0xf2aa,
            'import_export': 0xf2ab,
            'important_devices': 0xf2ac,
            'inbox': 0xf2ad,
            'info_outline': 0xf2ae,
            'info': 0xf2af,
            'input': 0xf2b0,
            'insert_chart': 0xf2b1,
            'insert_comment': 0xf2b2,
            'insert_drive_file': 0xf2b3,
            'insert_emoticon': 0xf2b4,
            'insert_invitation': 0xf2b5,
            'insert_link': 0xf2b6,
            'insert_photo': 0xf2b7,
            'invert_colors_off': 0xf2b8,
            'invert_colors': 0xf2b9,
            'iso': 0xf2ba,
            'keyboard_arrow_down': 0xf2bb,
            'keyboard_arrow_left': 0xf2bc,
            'keyboard_arrow_right': 0xf2bd,
            'keyboard_arrow_up': 0xf2be,
            'keyboard_backspace': 0xf2bf,
            'keyboard_capslock': 0xf2c0,
            'keyboard_hide': 0xf2c1,
            'keyboard_return': 0xf2c2,
            'keyboard_tab': 0xf2c3,
            'keyboard_voice': 0xf2c4,
            'keyboard': 0xf2c5,
            'kitchen': 0xf2c6,
            'label_outline': 0xf2c7,
            'label': 0xf2c8,
            'landscape': 0xf2c9,
            'language': 0xf2ca,
            'laptop_chromebook': 0xf2cb,
            'laptop_mac': 0xf2cc,
            'laptop_windows': 0xf2cd,
            'laptop': 0xf2ce,
            'last_page': 0xf2cf,
            'launch': 0xf2d0,
            'layers_clear': 0xf2d1,
            'layers': 0xf2d2,
            'leak_add': 0xf2d3,
            'leak_remove': 0xf2d4,
            'lens': 0xf2d5,
            'library_add': 0xf2d6,
            'library_books': 0xf2d7,
            'library_music': 0xf2d8,
            'lightbulb_outline': 0xf2d9,
            'line_style': 0xf2da,
            'line_weight': 0xf2db,
            'linear_scale': 0xf2dc,
            'link': 0xf2dd,
            'linked_camera': 0xf2de,
            'list': 0xf2df,
            'live_help': 0xf2e0,
            'live_tv': 0xf2e1,
            'local_activity': 0xf2e2,
            'local_airport': 0xf2e3,
            'local_atm': 0xf2e4,
            'local_bar': 0xf2e5,
            'local_cafe': 0xf2e6,
            'local_car_wash': 0xf2e7,
            'local_convenience_store': 0xf2e8,
            'local_dining': 0xf2e9,
            'local_drink': 0xf2ea,
            'local_florist': 0xf2eb,
            'local_gas_station': 0xf2ec,
            'local_grocery_store': 0xf2ed,
            'local_hospital': 0xf2ee,
            'local_hotel': 0xf2ef,
            'local_laundry_service': 0xf2f0,
            'local_library': 0xf2f1,
            'local_mall': 0xf2f2,
            'local_movies': 0xf2f3,
            'local_offer': 0xf2f4,
            'local_parking': 0xf2f5,
            'local_pharmacy': 0xf2f6,
            'local_phone': 0xf2f7,
            'local_pizza': 0xf2f8,
            'local_play': 0xf2f9,
            'local_post_office': 0xf2fa,
            'local_printshop': 0xf2fb,
            'local_see': 0xf2fc,
            'local_shipping': 0xf2fd,
            'local_taxi': 0xf2fe,
            'location_city': 0xf2ff,
            'location_disabled': 0xf300,
            'location_off': 0xf301,
            'location_on': 0xf302,
            'location_searching': 0xf303,
            'lock_open': 0xf304,
            'lock_outline': 0xf305,
            'lock': 0xf306,
            'looks_3': 0xf307,
            'looks_4': 0xf308,
            'looks_5': 0xf309,
            'looks_6': 0xf30a,
            'looks_one': 0xf30b,
            'looks_two': 0xf30c,
            'looks': 0xf30d,
            'loop': 0xf30e,
            'loupe': 0xf30f,
            'low_priority': 0xf310,
            'loyalty': 0xf311,
            'mail_outline': 0xf312,
            'mail': 0xf313,
            'map': 0xf314,
            'markunread_mailbox': 0xf315,
            'markunread': 0xf316,
            'memory': 0xf317,
            'menu': 0xf318,
            'merge_type': 0xf319,
            'message': 0xf31a,
            'mic': 0xf31b,
            'mms': 0xf31c,
            'mnone': 0xf31d,
            'mode_comment': 0xf31e,
            'mode_edit': 0xf31f,
            'moff': 0xf320,
            'monetization_on': 0xf321,
            'monochrome_photos': 0xf322,
            'mood_bad': 0xf323,
            'mood': 0xf324,
            'more_horiz': 0xf325,
            'more_vert': 0xf326,
            'more': 0xf327,
            'motorcycle': 0xf328,
            'mouse': 0xf329,
            'move_to_inbox': 0xf32a,
            'movie_creation': 0xf32b,
            'movie_filter': 0xf32c,
            'movie': 0xf32d,
            'multiline_chart': 0xf32e,
            'musnote': 0xf32f,
            'musvideo': 0xf330,
            'my_location': 0xf331,
            'nature_people': 0xf332,
            'nature': 0xf333,
            'navigate_before': 0xf334,
            'navigate_next': 0xf335,
            'navigation': 0xf336,
            'near_me': 0xf337,
            'network_cell': 0xf338,
            'network_check': 0xf339,
            'network_locked': 0xf33a,
            'network_wifi': 0xf33b,
            'new_releases': 0xf33c,
            'next_week': 0xf33d,
            'nfc': 0xf33e,
            'no_encryption': 0xf33f,
            'no_sim': 0xf340,
            'not_interested': 0xf341,
            'note_add': 0xf342,
            'note': 0xf343,
            'notifications_active': 0xf344,
            'notifications_none': 0xf345,
            'notifications_off': 0xf346,
            'notifications_paused': 0xf347,
            'notifications': 0xf348,
            'ondemand_video': 0xf349,
            'opacity': 0xf34a,
            'open_in_browser': 0xf34b,
            'open_in_new': 0xf34c,
            'open_with': 0xf34d,
            'pages': 0xf34e,
            'pageview': 0xf34f,
            'palette': 0xf350,
            'pan_tool': 0xf351,
            'panorama_fish_eye': 0xf352,
            'panorama_horizontal': 0xf353,
            'panorama_vertical': 0xf354,
            'panorama_wide_angle': 0xf355,
            'panorama': 0xf356,
            'party_mode': 0xf357,
            'pause_circle_filled': 0xf358,
            'pause_circle_outline': 0xf359,
            'pause': 0xf35a,
            'payment': 0xf35b,
            'people_outline': 0xf35c,
            'people': 0xf35d,
            'perm_camera_mic': 0xf35e,
            'perm_contact_calendar': 0xf35f,
            'perm_data_setting': 0xf360,
            'perm_device_information': 0xf361,
            'perm_identity': 0xf362,
            'perm_media': 0xf363,
            'perm_phone_msg': 0xf364,
            'perm_scan_wifi': 0xf365,
            'person_add': 0xf366,
            'person_outline': 0xf367,
            'person_pin_circle': 0xf368,
            'person_pin': 0xf369,
            'person': 0xf36a,
            'personal_video': 0xf36b,
            'pets': 0xf36c,
            'phone_android': 0xf36d,
            'phone_bluetooth_speaker': 0xf36e,
            'phone_forwarded': 0xf36f,
            'phone_in_talk': 0xf370,
            'phone_iphone': 0xf371,
            'phone_locked': 0xf372,
            'phone_missed': 0xf373,
            'phone_paused': 0xf374,
            'phone': 0xf375,
            'phonelink_off': 0xf376,
            'phonelink': 0xf377,
            'photo_album': 0xf378,
            'photo_camera': 0xf379,
            'photo_filter': 0xf37a,
            'photo_library': 0xf37b,
            'photo': 0xf37c,
            'picture_as_pdf': 0xf37d,
            'picture_in_picture_alt': 0xf37e,
            'picture_in_picture': 0xf37f,
            'pie_chart_outlined': 0xf380,
            'pie_chart': 0xf381,
            'pin_drop': 0xf382,
            'place': 0xf383,
            'play_arrow': 0xf384,
            'play_circle_filled_white': 0xf385,
            'play_circle_filled': 0xf386,
            'play_circle_outline': 0xf387,
            'play_for_work': 0xf388,
            'playlist_add_check': 0xf389,
            'playlist_add': 0xf38a,
            'playlist_play': 0xf38b,
            'plus_one': 0xf38c,
            'poll': 0xf38d,
            'polymer': 0xf38e,
            'pool': 0xf38f,
            'portable_wifi_off': 0xf390,
            'portrait': 0xf391,
            'power_input': 0xf392,
            'power_settings_new': 0xf393,
            'power': 0xf394,
            'pregnant_woman': 0xf395,
            'present_to_all': 0xf396,
            'print': 0xf397,
            'priority_high': 0xf398,
            'public': 0xf399,
            'publish': 0xf39a,
            'query_builder': 0xf39b,
            'question_answer': 0xf39c,
            'queue_music': 0xf39d,
            'queue_play_next': 0xf39e,
            'queue': 0xf39f,
            'radio_button_checked': 0xf3a0,
            'radio_button_unchecked': 0xf3a1,
            'radio': 0xf3a2,
            'rate_review': 0xf3a3,
            'receipt': 0xf3a4,
            'recent_actors': 0xf3a5,
            'record_voice_over': 0xf3a6,
            'redeem': 0xf3a7,
            'redo': 0xf3a8,
            'refresh': 0xf3a9,
            'remove_circle_outline': 0xf3aa,
            'remove_circle': 0xf3ab,
            'remove_from_queue': 0xf3ac,
            'remove_red_eye': 0xf3ad,
            'remove_shopping_cart': 0xf3ae,
            'remove': 0xf3af,
            'repeat_one': 0xf3b0,
            'repeat': 0xf3b1,
            'replay_10': 0xf3b2,
            'replay_30': 0xf3b3,
            'replay_5': 0xf3b4,
            'replay': 0xf3b5,
            'reply_all': 0xf3b6,
            'reply': 0xf3b7,
            'report_problem': 0xf3b8,
            'report': 0xf3b9,
            'restaurant_menu': 0xf3ba,
            'restaurant': 0xf3bb,
            'restore_page': 0xf3bc,
            'restore': 0xf3bd,
            'ring_volume': 0xf3be,
            'room_service': 0xf3bf,
            'room': 0xf3c0,
            'rotate_90_degrees_ccw': 0xf3c1,
            'rotate_left': 0xf3c2,
            'rotate_right': 0xf3c3,
            'rounded_corner': 0xf3c4,
            'router': 0xf3c5,
            'rowing': 0xf3c6,
            'rss_feed': 0xf3c7,
            'rv_hookup': 0xf3c8,
            'satellite': 0xf3c9,
            'save': 0xf3ca,
            'scanner': 0xf3cb,
            'schedule': 0xf3cc,
            'school': 0xf3cd,
            'screen_lock_landscape': 0xf3ce,
            'screen_lock_portrait': 0xf3cf,
            'screen_lock_rotation': 0xf3d0,
            'screen_rotation': 0xf3d1,
            'screen_share': 0xf3d2,
            'sd_card': 0xf3d3,
            'sd_storage': 0xf3d4,
            'search': 0xf3d5,
            'security': 0xf3d6,
            'select_all': 0xf3d7,
            'send': 0xf3d8,
            'sentiment_dissatisfied': 0xf3d9,
            'sentiment_neutral': 0xf3da,
            'sentiment_satisfied': 0xf3db,
            'sentiment_very_dissatisfied': 0xf3dc,
            'sentiment_very_satisfied': 0xf3dd,
            'settings_applications': 0xf3de,
            'settings_backup_restore': 0xf3df,
            'settings_bluetooth': 0xf3e0,
            'settings_brightness': 0xf3e1,
            'settings_cell': 0xf3e2,
            'settings_ethernet': 0xf3e3,
            'settings_input_antenna': 0xf3e4,
            'settings_input_component': 0xf3e5,
            'settings_input_composite': 0xf3e6,
            'settings_input_hdmi': 0xf3e7,
            'settings_input_svideo': 0xf3e8,
            'settings_overscan': 0xf3e9,
            'settings_phone': 0xf3ea,
            'settings_power': 0xf3eb,
            'settings_remote': 0xf3ec,
            'settings_system_daydream': 0xf3ed,
            'settings_voice': 0xf3ee,
            'settings': 0xf3ef,
            'share': 0xf3f0,
            'shop_two': 0xf3f1,
            'shop': 0xf3f2,
            'shopping_basket': 0xf3f3,
            'shopping_cart': 0xf3f4,
            'short_text': 0xf3f5,
            'show_chart': 0xf3f6,
            'shuffle': 0xf3f7,
            'signal_cellular_0_bar': 0xf3f8,
            'signal_cellular_1_bar': 0xf3f9,
            'signal_cellular_2_bar': 0xf3fa,
            'signal_cellular_3_bar': 0xf3fb,
            'signal_cellular_4_bar': 0xf3fc,
            'signal_cellular_connected_no_internet_0_bar': 0xf3fd,
            'signal_cellular_connected_no_internet_1_bar': 0xf3fe,
            'signal_cellular_connected_no_internet_2_bar': 0xf3ff,
            'signal_cellular_connected_no_internet_3_bar': 0xf400,
            'signal_cellular_connected_no_internet_4_bar': 0xf401,
            'signal_cellular_no_sim': 0xf402,
            'signal_cellular_null': 0xf403,
            'signal_cellular_off': 0xf404,
            'signal_wifi_0_bar': 0xf405,
            'signal_wifi_1_bar_lock': 0xf406,
            'signal_wifi_1_bar': 0xf407,
            'signal_wifi_2_bar_lock': 0xf408,
            'signal_wifi_2_bar': 0xf409,
            'signal_wifi_3_bar_lock': 0xf40a,
            'signal_wifi_3_bar': 0xf40b,
            'signal_wifi_4_bar_lock': 0xf40c,
            'signal_wifi_4_bar': 0xf40d,
            'signal_wifi_off': 0xf40e,
            'sim_card_alert': 0xf40f,
            'sim_card': 0xf410,
            'skip_next': 0xf411,
            'skip_previous': 0xf412,
            'slideshow': 0xf413,
            'slow_motion_video': 0xf414,
            'smartphone': 0xf415,
            'smoke_free': 0xf416,
            'smoking_rooms': 0xf417,
            'sms_failed': 0xf418,
            'sms': 0xf419,
            'snooze': 0xf41a,
            'sort': 0xf41b,
            'spa': 0xf41c,
            'space_bar': 0xf41d,
            'speaker_group': 0xf41e,
            'speaker_notes_off': 0xf41f,
            'speaker_notes': 0xf420,
            'speaker_phone': 0xf421,
            'speaker': 0xf422,
            'spellcheck': 0xf423,
            'star_half': 0xf424,
            'stars': 0xf425,
            'stay_current_landscape': 0xf426,
            'stay_current_portrait': 0xf427,
            'stay_primary_landscape': 0xf428,
            'stay_primary_portrait': 0xf429,
            'stop_screen_share': 0xf42a,
            'stop': 0xf42b,
            'storage': 0xf42c,
            'store_mall_directory': 0xf42d,
            'store': 0xf42e,
            'straighten': 0xf42f,
            'streetview': 0xf430,
            'strikethrough_s': 0xf431,
            'style': 0xf432,
            'subdirectory_arrow_left': 0xf433,
            'subdirectory_arrow_right': 0xf434,
            'subject': 0xf435,
            'subscriptions': 0xf436,
            'subtitles': 0xf437,
            'subway': 0xf438,
            'supervisor_account': 0xf439,
            'surround_sound': 0xf43a,
            'swap_calls': 0xf43b,
            'swap_horiz': 0xf43c,
            'swap_vert': 0xf43d,
            'swap_vertical_circle': 0xf43e,
            'switch_camera': 0xf43f,
            'switch_video': 0xf440,
            'sync_disabled': 0xf441,
            'sync_problem': 0xf442,
            'sync': 0xf443,
            'system_update_alt': 0xf444,
            'system_update': 0xf445,
            'tab_unselected': 0xf446,
            'tab': 0xf447,
            'tablet_android': 0xf448,
            'tablet_mac': 0xf449,
            'tablet': 0xf44a,
            'tag_faces': 0xf44b,
            'tap_and_play': 0xf44c,
            'terrain': 0xf44d,
            'text_fields': 0xf44e,
            'text_format': 0xf44f,
            'textsms': 0xf450,
            'texture': 0xf451,
            'theaters': 0xf452,
            'thumb_down': 0xf453,
            'thumb_up': 0xf454,
            'thumbs_up_down': 0xf455,
            'time_to_leave': 0xf456,
            'timelapse': 0xf457,
            'timeline': 0xf458,
            'timer_10': 0xf459,
            'timer_3': 0xf45a,
            'timer_off': 0xf45b,
            'timer': 0xf45c,
            'title': 0xf45d,
            'toc': 0xf45e,
            'today': 0xf45f,
            'toll': 0xf460,
            'tonality': 0xf461,
            'touch_app': 0xf462,
            'toys': 0xf463,
            'track_changes': 0xf464,
            'traffic': 0xf465,
            'train': 0xf466,
            'tram': 0xf467,
            'transfer_within_a_station': 0xf468,
            'transform': 0xf469,
            'translate': 0xf46a,
            'trending_down': 0xf46b,
            'trending_flat': 0xf46c,
            'trending_up': 0xf46d,
            'tune': 0xf46e,
            'turned_in_not': 0xf46f,
            'turned_in': 0xf470,
            'tv': 0xf471,
            'unarchive': 0xf472,
            'undo': 0xf473,
            'unfold_less': 0xf474,
            'unfold_more': 0xf475,
            'update': 0xf476,
            'usb': 0xf477,
            'verified_user': 0xf478,
            'vertical_align_bottom': 0xf479,
            'vertical_align_center': 0xf47a,
            'vertical_align_top': 0xf47b,
            'vibration': 0xf47c,
            'video_call': 0xf47d,
            'video_label': 0xf47e,
            'video_library': 0xf47f,
            'videocam_off': 0xf480,
            'videocam': 0xf481,
            'videogame_asset': 0xf482,
            'view_agenda': 0xf483,
            'view_array': 0xf484,
            'view_carousel': 0xf485,
            'view_column': 0xf486,
            'view_comfy': 0xf487,
            'view_compact': 0xf488,
            'view_day': 0xf489,
            'view_headline': 0xf48a,
            'view_list': 0xf48b,
            'view_module': 0xf48c,
            'view_quilt': 0xf48d,
            'view_stream': 0xf48e,
            'view_week': 0xf48f,
            'visibility_off': 0xf490,
            'visibility': 0xf491,
            'voice_chat': 0xf492,
            'voicemail': 0xf493,
            'volume_down': 0xf494,
            'volume_mute': 0xf495,
            'volume_off': 0xf496,
            'volume_up': 0xf497,
            'vpn_key': 0xf498,
            'vpn_lock': 0xf499,
            'wallpaper': 0xf49a,
            'warning': 0xf49b,
            'watch_later': 0xf49c,
            'watch': 0xf49d,
            'wb_auto': 0xf49e,
            'wb_cloudy': 0xf49f,
            'wb_incandescent': 0xf4a0,
            'wb_iridescent': 0xf4a1,
            'wb_sunny': 0xf4a2,
            'wc': 0xf4a3,
            'web_asset': 0xf4a4,
            'web': 0xf4a5,
            'weekend': 0xf4a6,
            'whatshot': 0xf4a7,
            'widgets': 0xf4a8,
            'wifi_lock': 0xf4a9,
            'wifi_tethering': 0xf4aa,
            'wifi': 0xf4ab,
            'work': 0xf4ac,
            'wrap_text': 0xf4ad,
            'youtube_searched_for': 0xf4ae,
            'zoom_out_map': 0xf4af,
            'format_subscript': 0xf4b0,
            'format_superscript': 0xf4b1,
            'table': 0xf4b2,
            'table_column_add_after': 0xf4b3,
            'table_column_add_before': 0xf4b4,
            'table_column_delete': 0xf4b5,
            'table_row_add_after': 0xf4b6,
            'table_row_add_before': 0xf4b7,
            'table_row_delete': 0xf4b8,
            'table_merge_cells': 0xf4b9,
            'table_split_cells': 0xf4ba,
            'table_toggle_header_cell': 0xf4bb,
            'table_toggle_header_column': 0xf4bc,
            'table_toggle_header_row': 0xf4bd,
        },
    };

    return Object.assign(defaultSettings, setting);
}