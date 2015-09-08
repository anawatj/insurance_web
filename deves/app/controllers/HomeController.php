<?php

use Phalcon\Mvc\Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HomeController
 *
 * @author Tao
 */
class HomeController extends Controller {

    public function initialize() {
        $this->view->setTemplateAfter('template');
    }

    public function indexAction() {
        
    }

}
