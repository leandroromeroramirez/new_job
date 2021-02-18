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

/* modules/custom/tour_360/templates/marzipano.html.twig */
class __TwigTemplate_99808588ed1c53f78236b95a3560e7d8082b265c1f53d2fd1eb079bc20e847a4 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"multiple-scenes view-control-buttons\">

  <div id=\"pano\"></div>
  <div id=\"sceneList\">
    <p>Mundos</p>
    <ul class=\"scenes\">
      ";
        // line 7
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["data"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["scn"]) {
            // line 8
            echo "      <li class=\"text\">
        <a href=\"javascript:void(0)\" class=\"scene\" data-id=\"";
            // line 9
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["scn"], "id", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
            echo "\">
          <span>";
            // line 10
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["scn"], "name", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
            echo "</span>
          <div class=\"wrapper-img\">
            <img src=\"";
            // line 12
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["scn"], "url_image", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
            echo "\" alt=\"\">
          </div>
        </a>
      </li>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['scn'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 17
        echo "    </ul>
  </div>

  <!-- Generated markup by the plugin -->
  <div class=\"tooltip bs-tooltip-top\" role=\"tooltip\">
    <div class=\"arrow\"></div>
    <div class=\"tooltip-inner\">
      Some tooltip text!
    </div>
  </div>

  <div id=\"titleBar\">
    <h1 class=\"sceneName\"></h1>
  </div>

  <a href=\"javascript:void(0)\" id=\"autorotateToggle\">
    <img class=\"icon off\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/play.png\" alt=\"\">
    <img class=\"icon on\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/pause.png\" alt=\"\">
  </a>

  <a href=\"javascript:void(0)\" id=\"fullscreenToggle\">
    <img class=\"icon off\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/fullscreen.png\"
      alt=\"\">
    <img class=\"icon on\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/windowed.png\" alt=\"\">
  </a>

  <a href=\"javascript:void(0)\" id=\"sceneListToggle\">
    <img class=\"icon off\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/expand.png\">
    <img class=\"icon on\" src=\"../../../../themes/custom/store_interfaz/source/images/marzipano/img/collapse.png\">
  </a>

  <!-- <a href=\"javascript:void(0)\" id=\"viewUp\" class=\"viewControlButton viewControlButton-1\">
    <img class=\"icon\" src=\"img/up.png\">
  </a>
  <a href=\"javascript:void(0)\" id=\"viewDown\" class=\"viewControlButton viewControlButton-2\">
    <img class=\"icon\" src=\"img/down.png\">
  </a>
  <a href=\"javascript:void(0)\" id=\"viewLeft\" class=\"viewControlButton viewControlButton-3\">
    <img class=\"icon\" src=\"img/left.png\">
  </a>
  <a href=\"javascript:void(0)\" id=\"viewRight\" class=\"viewControlButton viewControlButton-4\">
    <img class=\"icon\" src=\"img/right.png\">
  </a>
  <a href=\"javascript:void(0)\" id=\"viewIn\" class=\"viewControlButton viewControlButton-5\">
    <img class=\"icon\" src=\"img/plus.png\">
  </a>
  <a href=\"javascript:void(0)\" id=\"viewOut\" class=\"viewControlButton viewControlButton-6\">
    <img class=\"icon\" src=\"img/minus.png\">
  </a> -->
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/custom/tour_360/templates/marzipano.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 17,  63 => 12,  58 => 10,  54 => 9,  51 => 8,  47 => 7,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/custom/tour_360/templates/marzipano.html.twig", "/var/www/drupalvm/test_new_job/web/modules/custom/tour_360/templates/marzipano.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 7);
        static $filters = array("escape" => 9);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
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
