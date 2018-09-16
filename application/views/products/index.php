<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>Productos</h2>
        <ol class="breadcrumb">
            <li>
                <a href="">Home</a>
            </li>
            <li class="active">
                <strong>Productos</strong>
            </li>
        </ol>
    </div>
    <div class="col-lg-2"></div>
</div>
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>Administración de productos</h5>
                    <div class="pull-right">
                        <button class="btn btn-success btn-circle" type="button" ng-click="addModal();">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="ibox-content">
                    <table datatable="ng" dt-options="dtOptions" ng-init="init();" class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Proveedor</th>                                
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="product in products">
                                <td>{{ product.ProductId }}</td>
                                <td>{{ product.ProductName }}</td>
                                <td>{{ product.ProductDescription }}</td>
                                <td>{{ product.ProviderName }}</td>
                                <td class="text-center">
                                    <button class="btn btn-warning btn-circle" type="button" ng-click="editModal(product);">
                                        <i class="fa fa-pencil"></i>
                                    </button>
                                    <button class="btn btn-danger btn-circle" type="button" ng-click="deleteModal(product);">
                                        <i class="fa  fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>