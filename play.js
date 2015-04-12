$(function () {
var audioElement = $('#content'),
    href = audioElement.children('a').attr('href');
$.template('audioTemplate', '<audio src="${src}" controls>');
if (Modernizer.audio.mp3) {
    audioElement.empty();
    $.tmpl('audioTemplate', {src: href}).appendTo(audioElement);
}
});