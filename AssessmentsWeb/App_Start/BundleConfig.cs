using System.Web;
using System.Web.Optimization;

namespace AssessmentsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new StyleBundle("~/Content/css")
                .IncludeDirectory("~/Content/", "*.css", searchSubdirectories:true));

            bundles.Add(new ScriptBundle("~/Scripts/Angular")
                .Include("~/Scripts/Angular/angular.min.js")
                .Include("~/Scripts/Angular UI Router/angular-ui-router.js")
                .Include("~/Scripts/Angular Resource/angular-resource.min.js"));

            bundles.Add(new ScriptBundle("~/Scripts/App")
                .Include("~/Scripts/App.js"));

            bundles.Add(new ScriptBundle("~/Scripts/Services")
               .IncludeDirectory("~/Scripts/Services/", "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/Scripts/Directives")
              .IncludeDirectory("~/Scripts/Directives/", "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/Scripts/Controllers")
                .IncludeDirectory("~/Scripts/Controllers/", "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/Scripts/Vendors")
                .IncludeDirectory("~/Scripts/Vendors/", "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/Scripts/SignalR").
                IncludeDirectory("~/Scripts/SignalR/", "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/Scripts/Select").
                Include("~/Scripts/Select/select2.min.js").
                Include("~/Scripts/Select/select2.js"));
        }
    }
}
