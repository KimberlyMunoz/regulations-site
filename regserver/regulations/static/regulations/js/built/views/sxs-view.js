define("sxs-view",["jquery","underscore","backbone","dispatch","./sxs-model","./regs-router"],function(e,t,n,r,i,s){var o=n.View.extend({el:"#breakaway-view",events:{"click .sxs-back-button":"closeAnalysis"},initialize:function(){var e=this.options.regParagraph+"/"+this.options.docNumber+"?from_version="+this.options.fromVersion,t=i.get(e);typeof t.done!="undefined"?t.done(function(e){this.render(e)}.bind(this)):this.render(t),s.navigate("sxs/"+e),r.on("sxs:close",this.closeAnalysis,this)},render:function(e){this.$el.html(e),this.$el.addClass("open-sxs"),r.trigger("breakaway:open")},closeAnalysis:function(e){typeof e!="undefined"&&(e.preventDefault(),window.history.back()),this.$el.removeClass("open-sxs"),r.trigger("breakaway:close")}});return o});