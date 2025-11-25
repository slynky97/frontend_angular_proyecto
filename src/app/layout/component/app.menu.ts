import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Admin',
                items: [{ label: 'Administrador', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                { label: 'Perfil', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] }]
            },
            {
                label: 'Seguridad',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-home', routerLink: ['/admin/usuario'] },
                    { label: 'Roles & Permisos', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/roles'] },
                    /*{ label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }*/
                ]
            },
            {
                label: 'Gestion de Inventario',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Categoria',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/admin/categoria']
                    },
                    /*{
                        label: 'Producto',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },*/
                    {
                        label: 'Producto',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/admin/producto']
                    },
                    {
                        label: 'Almacen',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/admin/almacen']
                    },
                    {
                        label: 'Sucursal',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/sucursal']
                    }
                ]
            },
            {
                label: 'Gestion Pedidos',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Cliente/Proveedor',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/admin/cliente']
                    },
                    {
                        label: 'Compra',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/admin/nota/compra']
                    },
                    {
                        label: 'Nueva Compra',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/nota/compra/nuevo']
                    },
                    {
                        label: 'Venta',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/admin/nota/venta']
                    },
                    {
                        label: 'Nueva Venta',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/nota/venta/nuevo']
                    },
                ]
            }
            /*{
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }*/
        ];
    }
}
