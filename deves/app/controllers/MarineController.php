<?php
use Phalcon\Mvc\View;
use Phalcon\Mvc\Controller;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of NonMotorController
 *
 * @author Tao
 */
class MarineController extends Controller {
   
    public function indexAction()
    {
        $this->view->setTemplateAfter('template');
    }
}
