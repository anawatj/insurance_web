<?php

use Phalcon\Mvc\Model;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Brand
 *
 * @author Tao
 */
class CarBrand extends Model {

    public $id;
    public $code;
    public $name;
    public $createBy;
    public $createDate;
    public $lastupdateBy;
    public $lastupdateDate;

    public function initialize() {
        $this->setSource("tbl_brand");
    }

    public function columnMap() {
        // Keys are the real names in the table and
        // the values their names in the application
        return array(
            'id' => 'id',
            'code' => 'code',
            'name' => 'name',
            'create_by' => 'createBy',
            'create_date'=>'createDate',
            'lastupdate_by'=>'lastupdateBy',
            'lastupdate_date'=>'lastupdateDate'
        );
    }

}
