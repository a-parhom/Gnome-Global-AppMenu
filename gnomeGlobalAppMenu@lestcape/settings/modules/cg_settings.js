/* -*- mode: js; js-basic-offset: 4; indent-tabs-mode: nil -*- */
/* ========================================================================================================
 * cg_settings.js - Module for display the Classic Gnome xlet settings -
 * ========================================================================================================
 */

const Lang = imports.lang;
const Gettext = imports.gettext;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;

const XletSettings = cimports.settings.xletSettings;
/*
const _ = Gettext.gettext;

var Module = GObject.registerClass({
        GTypeName: 'ModuleSettings'
    },
    
    class Module extends St.Button {

        _init() {
            this.handler = null;
            this.name = "settings";
            this.comment = _("Manage the extension settings");
            this.category = "prefs";
        }

        can_load_with_arguments(argv) {
            return ((argv.length > 2) && (argv[0] == "settings") &&
                    (["applet", "desklet", "extension"].indexOf(argv[1]) != -1));
        }

        have_direct_link() {
            return false;
        }

        set_handler(handler) {
            this.handler = handler;
        }

        get_side_page(argv, window, content_box) {
            if(!this.sidePage)
                this.sidePage = new XletSettings.XLetSidePage(argv, window, content_box, this);
            return this.sidePage;
        }

        on_module_selected() {
            if(this.sidePage) {
                if (!this.sidePage.isLoaded) {
                    global.log("Loading Settings module");
                    this.sidePage.load();
                }
                this.sidePage.build();
            }
        }
    }
);
*/