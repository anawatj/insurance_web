<?php

use Phalcon\Mvc\View;
use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Model\Resultset;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AboutController
 *
 * @author Tao
 */
class AboutController extends Controller {

    public function summaryAction() {
        $this->view->setTemplateAfter('template');
    }

    public function careerAction() {
        $this->view->setTemplateAfter('template');
    }

    public function companyAction() {
        $this->view->setTemplateAfter('template');
    }

}
