<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/store_interfaz/templates/layout/page.html.twig */
class __TwigTemplate_d8eda112e6d7142ec7d2b8b9c0ababa037cbdac8239b9585c6c834f43a7a1343 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'head' => [$this, 'block_head'],
            'content' => [$this, 'block_content'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@bootstrap_barrio/layout/page.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("@bootstrap_barrio/layout/page.html.twig", "themes/custom/store_interfaz/templates/layout/page.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 72
    public function block_head($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 73
        echo "    ";
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 73) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header", [], "any", false, false, true, 73)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header_form", [], "any", false, false, true, 73))) {
            // line 74
            echo "        <nav class=\"container\" ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["navbar_top_attributes"] ?? null), 74, $this->source), "html", null, true);
            echo ">
            ";
            // line 75
            if (($context["container_navbar"] ?? null)) {
                // line 76
                echo "            <div class=\"container\">
                ";
            }
            // line 78
            echo "                ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
            echo "
                ";
            // line 79
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header", [], "any", false, false, true, 79), 79, $this->source), "html", null, true);
            echo "
                ";
            // line 80
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header_form", [], "any", false, false, true, 80)) {
                // line 81
                echo "                    <div class=\"form-inline navbar-form float-right\">
                        ";
                // line 82
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header_form", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
                echo "
                    </div>
                ";
            }
            // line 85
            echo "                ";
            if (($context["container_navbar"] ?? null)) {
                // line 86
                echo "            </div>
            ";
            }
            // line 88
            echo "        </nav>
    ";
        }
        // line 90
        echo "    <nav";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["navbar_attributes"] ?? null), 90, $this->source), "html", null, true);
        echo ">
        ";
        // line 91
        if (($context["container_navbar"] ?? null)) {
            // line 92
            echo "        <div class=\"container\">
            ";
        }
        // line 94
        echo "            ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 94), 94, $this->source), "html", null, true);
        echo "
            ";
        // line 95
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 95) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_form", [], "any", false, false, true, 95))) {
            // line 96
            echo "                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"
                        data-target=\"#CollapsingNavbar\" aria-controls=\"CollapsingNavbar\" aria-expanded=\"false\"
                        aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>
                <div class=\"collapse navbar-collapse\" id=\"CollapsingNavbar\">
                    ";
            // line 100
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo "
                    ";
            // line 101
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_form", [], "any", false, false, true, 101)) {
                // line 102
                echo "                        <div class=\"form-inline navbar-form float-right\">
                            ";
                // line 103
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_form", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                echo "
                        </div>
                    ";
            }
            // line 106
            echo "                </div>
            ";
        }
        // line 108
        echo "            ";
        if (($context["sidebar_collapse"] ?? null)) {
            // line 109
            echo "                <button class=\"navbar-toggler navbar-toggler-left collapsed\" type=\"button\" data-toggle=\"collapse\"
                        data-target=\"#CollapsingLeft\" aria-controls=\"CollapsingLeft\" aria-expanded=\"false\"
                        aria-label=\"Toggle navigation\"></button>
            ";
        }
        // line 113
        echo "            ";
        if (($context["container_navbar"] ?? null)) {
            // line 114
            echo "        </div>
        ";
        }
        // line 116
        echo "    </nav>
";
    }

    // line 119
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 120
        echo "    <div id=\"main\" class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null), 120, $this->source), "html", null, true);
        echo "\">
        ";
        // line 121
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 121), 121, $this->source), "html", null, true);
        echo "
        <div class=\"row row-offcanvas row-offcanvas-left clearfix\">
            <main";
        // line 123
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content_attributes"] ?? null), 123, $this->source), "html", null, true);
        echo ">
                <section class=\"section\">
                    <a id=\"main-content\" tabindex=\"-1\"></a>
                    ";
        // line 126
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
        echo "
                </section>
            </main>
            ";
        // line 129
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 129)) {
            // line 130
            echo "                <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebar_first_attributes"] ?? null), 130, $this->source), "html", null, true);
            echo ">
                    <aside class=\"section\" role=\"complementary\">
                        ";
            // line 132
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 132), 132, $this->source), "html", null, true);
            echo "
                    </aside>
                </div>
            ";
        }
        // line 136
        echo "            ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 136)) {
            // line 137
            echo "                <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebar_second_attributes"] ?? null), 137, $this->source), "html", null, true);
            echo ">
                    <aside class=\"section\" role=\"complementary\">
                        ";
            // line 139
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 139), 139, $this->source), "html", null, true);
            echo "
                    </aside>
                </div>
            ";
        }
        // line 143
        echo "        </div>
    </div>
";
    }

    // line 147
    public function block_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 148
        echo "    <div class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null), 148, $this->source), "html", null, true);
        echo "\">
        ";
        // line 149
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 149) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 149)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 149)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 149))) {
            // line 150
            echo "            <div class=\"site-footer__top clearfix\">
                ";
            // line 151
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 151), 151, $this->source), "html", null, true);
            echo "
                ";
            // line 152
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 152), 152, $this->source), "html", null, true);
            echo "
                ";
            // line 153
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 153), 153, $this->source), "html", null, true);
            echo "
                ";
            // line 154
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 154), 154, $this->source), "html", null, true);
            echo "
            </div>
        ";
        }
        // line 157
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 157)) {
            // line 158
            echo "            <div class=\"site-footer__bottom\">
                ";
            // line 159
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 159), 159, $this->source), "html", null, true);
            echo "
            </div>
        ";
        }
        // line 162
        echo "    </div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/store_interfaz/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  270 => 162,  264 => 159,  261 => 158,  258 => 157,  252 => 154,  248 => 153,  244 => 152,  240 => 151,  237 => 150,  235 => 149,  230 => 148,  226 => 147,  220 => 143,  213 => 139,  207 => 137,  204 => 136,  197 => 132,  191 => 130,  189 => 129,  183 => 126,  177 => 123,  172 => 121,  167 => 120,  163 => 119,  158 => 116,  154 => 114,  151 => 113,  145 => 109,  142 => 108,  138 => 106,  132 => 103,  129 => 102,  127 => 101,  123 => 100,  117 => 96,  115 => 95,  110 => 94,  106 => 92,  104 => 91,  99 => 90,  95 => 88,  91 => 86,  88 => 85,  82 => 82,  79 => 81,  77 => 80,  73 => 79,  68 => 78,  64 => 76,  62 => 75,  57 => 74,  54 => 73,  50 => 72,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/store_interfaz/templates/layout/page.html.twig", "/var/www/drupalvm/test_new_job/web/themes/custom/store_interfaz/templates/layout/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 73);
        static $filters = array("escape" => 74);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
