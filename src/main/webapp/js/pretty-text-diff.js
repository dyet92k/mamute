/*
@preserve jQuery.PrettyTextDiff 1.0.2
See https://github.com/arnab/jQuery.PrettyTextDiff/
*/
(function(){var $;$=jQuery;$.fn.extend({prettyTextDiff:function(options){var dmp,settings;settings={originalContainer:".original",changedContainer:".changed",diffContainer:".diff",cleanup:true,debug:false};settings=$.extend(settings,options);$.fn.prettyTextDiff.debug("Options: ",settings,settings);dmp=new diff_match_patch;return this.each(function(){var changed,diff_as_html,diffs,original;original=$(settings.originalContainer,this).text();$.fn.prettyTextDiff.debug("Original text found: ",original,settings);changed=$(settings.changedContainer,this).text();$.fn.prettyTextDiff.debug("Changed  text found: ",changed,settings);diffs=dmp.diff_main(original,changed);if(settings.cleanup){dmp.diff_cleanupSemantic(diffs)}$.fn.prettyTextDiff.debug("Diffs: ",diffs,settings);diff_as_html=diffs.map(function(diff){return $.fn.prettyTextDiff.createHTML(diff)});$(settings.diffContainer,this).html(diff_as_html.join(""));return this})}});$.fn.prettyTextDiff.debug=function(message,object,settings){if(settings.debug){return console.log(message,object)}};$.fn.prettyTextDiff.createHTML=function(diff){var data,html,operation,pattern_amp,pattern_gt,pattern_lt,pattern_para,text;html=[];pattern_amp=/&/g;pattern_lt=/</g;pattern_gt=/>/g;pattern_para=/\n/g;operation=diff[0],data=diff[1];text=data.replace(pattern_amp,"&amp;").replace(pattern_lt,"&lt;").replace(pattern_gt,"&gt;").replace(pattern_para,"<br>");switch(operation){case DIFF_INSERT:return"<ins>"+text+"</ins>";case DIFF_DELETE:return"<del>"+text+"</del>";case DIFF_EQUAL:return"<span>"+text+"</span>"}}}).call(this);