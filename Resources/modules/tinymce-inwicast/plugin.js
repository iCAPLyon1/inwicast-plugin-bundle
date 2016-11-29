import './langs/en'
import './langs/fr_FR'

(function (tinymce) {
  'use strict';

  tinymce.PluginManager.requireLangPack('inwicast', 'en,fr_FR');
  tinymce.PluginManager.add('inwicast', function(editor) {
    editor.addButton('inwicast', {
      tooltip: "Inwicast video",
      icon: "none fa fa-play-circle",
      onclick: function() {
        // Open window
        editor.windowManager.open({
          title: 'Inwicast video',
          url: window.Routing.generate("inwicast_mediacenter_user_videos_tinymce",{}, true),
          width: 600,
          height: 400,
          buttons: [
            {
              text: 'Insert',
              onclick: function() {
                // Top most window object
                var win = editor.windowManager.getWindows()[0];

                var videoIframe = win.getContentWindow().getSelectedMediaIframe();


                // Insert the contents of the dialog.html textarea into the editor
                editor.insertContent(videoIframe);

                // Close the window
                win.close();
              }
            },

            {text: 'Close', onclick: 'close'}
          ]
        });
      }
    });
  });
}(window.tinymce));