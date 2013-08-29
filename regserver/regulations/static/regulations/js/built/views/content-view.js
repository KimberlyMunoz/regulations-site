define("content-view",["jquery","underscore","backbone","jquery-scrollstop","dispatch","definition-view","sub-head-view","reg-model","section-footer-view","regs-router"],function(e,t,n,r,i,s,o,u,a,f){var l=n.View.extend({el:".main-content",events:{"click .definition":"termLinkHandler","click .inline-interp-header":"expandInterp","mouseenter *[data-permalink-section]":"showPermalink","click .permalink-marker":"permalinkMarkerHandler","click .definition.active":"openDefinitionLinkHandler"},initialize:function(){i.on("definition:remove",this.closeDefinition,this),i.on("toc:click",this.loadSection,this),i.on("openSection:set",this.loadSection,this),e(window).on("scrollstop",t.bind(this.checkActiveSection,this)),this.activeSection="",this.$activeSection="",this.$sections={},this.updateWayfinding(),this.$window=e(window),this.header=new o,i.set("sectionNav",new a({el:this.$el.find(".section-nav")}))},checkActiveSection:function(){var e=this.$contentContainer.length-1;for(var n=0;n<=e;n++)if(this.$sections[n].offset().top+this.$contentHeader.height()>=this.$window.scrollTop())if(t.isEmpty(this.activeSection)||this.activeSection!==this.$sections[n].id){this.activeSection=this.$sections[n][0].id,this.$activeSection=this.$sections[n][0],i.trigger("activeSection:change",this.activeSection);return}return this},loadSection:function(t){var n=u.get(t);e(".reg-text").addClass("loading"),typeof n.done!="undefined"?n.done(function(e){this.openSection(e,t)}.bind(this)):this.openSection(n,t)},openSection:function(e,t){var n=i.getURLPrefix();this.$el.html(e),window.scrollTo(0,0),i.trigger("section:open",t),i.set("section",t),i.set("sectionNav",new a({el:this.$el.find(".section-nav")})),n?f.navigate("/"+n+"/regulation/"+t+"/"+i.getVersion()):f.navigate("/regulation/"+t+"/"+i.getVersion()),this.updateWayfinding()},updateWayfinding:function(){var t,n;this.$contentHeader=this.$contentHeader||e("header.reg-header"),this.$contentContainer=this.$el.find(".level-1 li[id], .reg-section, .appendix-section, .supplement-section"),n=this.$contentContainer.length;for(t=0;t<n;t++)this.$sections[t]=e(this.$contentContainer[t])},render:function(){this.loadSection(i.getOpenSection())},closeDefinition:function(){this.clearActiveTerms()},openDefinitionLinkHandler:function(t){i.trigger("ga-event:definition",{action:"clicked key term to close definition",context:e(t.target).data("definition")})},toggleDefinition:function(e){return this.setActiveTerm(e),this},termLinkHandler:function(t){t.preventDefault();var n=e(t.target),r=n.attr("data-definition");return n.data("active")?(i.remove("definition"),this.clearActiveTerms()):i.getViewId("definition")===r?this.toggleDefinition(n):(i.remove("definition"),this.openDefinition(r,n)),this},openDefinition:function(e,t){var n=new s({id:e,$anchor:t});return i.set("definition",n),i.trigger("definition:open"),i.trigger("ga-event:definition",{action:"clicked key term to open definition",context:e}),this.setActiveTerm(t),n},expandInterp:function(t){t.stopPropagation();var n=e(t.currentTarget),r=n.parent(),i=n.find(".expand-button");return r.toggleClass("open"),n.next(".hidden").slideToggle(),i.html(r.hasClass("open")?"Hide":"Show"),this},showPermalink:function(t){e(".permalink-marker").remove();var n=document.createElement("a"),r=e(t.currentTarget),i;n.href="#"+r[0].id,n.innerHTML="Permalink",n.className="permalink-marker",i=e(n),r.children().first().prepend(i)},permalinkMarkerHandler:function(t){i.trigger("ga-event:permalink",e(t.target).attr("href"))},changeFocus:function(t){e(t).focus()},clearActiveTerms:function(){this.$el.find(".active.definition").removeClass("active").removeData("active")},setActiveTerm:function(e){this.clearActiveTerms(),e.addClass("active").data("active",1)}});return l});