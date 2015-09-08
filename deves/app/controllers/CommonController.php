<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Model\Resultset;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CommonController
 *
 * @author Tao
 */
class CommonController extends Controller {

    public function getListBrandAction() {
        $brands = CarBrand::find([])->toArray();
        echo json_encode($brands);
    }
    public function getListModelAction()
    {
        $brandId =  $this->request->getQuery('id');
        $models = CarModel::find( array(
        "brandId = ?0",
        "bind" => [$brandId],
    ))->toArray();
        echo json_encode($models);
    }

}
