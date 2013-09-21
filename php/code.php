<?php

namespace Some\Namespace;

class CamelCaseClass
{
    const SOME_CONSTANT = "a value";

    /**
     * Function are always documented with at least parameters type and
     * return type. If possible, type is enforced through PHP (array, class)
     *
     * @return string bla bla bla
     */
    private function camelCaseFunction(array $elements)
    {
        foreach($elements as $k => $e) {
            if($e == 'something') {
                echo "found something";
            } else {
                $someData = $e;
                break;
            }
        }
        return $someData;
    }
    
    public function render()
    {
        $values = array(
            'keys_in_snake_case' => 1
        );

        return $this->render('MyBundle:twig_template_are_named_with_snake_case.html.twig', $values);
    }
    
    final protected static function someStaticFunction()
    {
       // do something
    }
}

