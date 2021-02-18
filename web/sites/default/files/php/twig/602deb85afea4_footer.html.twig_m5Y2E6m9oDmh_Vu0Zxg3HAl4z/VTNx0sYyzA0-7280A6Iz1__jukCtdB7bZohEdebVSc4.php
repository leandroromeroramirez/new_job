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

/* modules/custom/header_footer/templates/footer.html.twig */
class __TwigTemplate_47c2880eb966fb372c9bce3d46c2fd0f9a770df58e34f8abc8598557f442ff1a extends \Twig\Template
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
        // line 2
        echo "<div class=\"btn-mobile-menu\"></div>
<div class=\"menu-ds-mobile\">
  <div class=\"footer row\">
    <!-- Col 1 -->
    <div class=\"col-lg-3\">
      <div class=\"flex-ds\">
        <a href=\"";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "url", [], "any", false, false, true, 8)) ? ("/home") : ("/")));
        echo "\">
          <img src=\"";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "logo_footer", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
        echo "\" alt=\"\" style=\"width: 159px;\">
        </a>
      </div>
      <div class=\"flex-ds\">
        <a class=\"link-gral\" href=\"/faq\">
          Preguntas Frecuentes
        </a>
      </div>
    </div>

    <!-- Col 2 -->
    <div class=\"col-lg-6 shared-site\">
      <h3>Redes</h3>
      <div class=\"wrapper-shared\">
        <a href=\"";
        // line 23
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "facebook", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
        echo "\" target=\"_blank\"><span class=\"icon-foot facebook\"></span></a>
        <a href=\"";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "instagram", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
        echo "\" target=\"_blank\"><span class=\"icon-foot instagram\"></span></a>
        <a href=\"https://api.whatsapp.com/send?phone=";
        // line 25
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "whatsApp", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
        echo "\" target=\"_blank\"><span
            class=\"icon-foot whatsapp\"></span></a>

      </div>
    </div>

    <!-- Col 3 -->
    <div class=\"col-lg-3 info-contact\">
      <h3>Contacto</h3>
      <a href=\"/contact\">
        <p>";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "email", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
        echo "</p>
      </a>
      <p>Teléfono: ";
        // line 37
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "phone_num", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
        echo "</p>
    </div>
  </div>
  <div class=\"row\">
    <div class=\"legal\">
      <p>";
        // line 42
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["data"] ?? null), "txt_legal", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
        echo "</p>
    </div>
    <div class=\"copy\">
      <p>Carvajal 2020 - Todos los derechos reservados</p>
    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/custom/header_footer/templates/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  102 => 42,  94 => 37,  89 => 35,  76 => 25,  72 => 24,  68 => 23,  51 => 9,  47 => 8,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/custom/header_footer/templates/footer.html.twig", "/var/www/drupalvm/test_new_job/web/modules/custom/header_footer/templates/footer.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 9);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
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
