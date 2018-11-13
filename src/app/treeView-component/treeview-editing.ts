/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ViewContainerRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { IntegralUITreeView } from 'integralui/components/integralui.treeview';

@Component({
    selector: 'treeview-edit',
    templateUrl: './treeView-editing.html',
    styleUrls: [ './treeView-editing.scss' ],     
    encapsulation: ViewEncapsulation.None
})
export class TreeViewEditingSample {
    @ViewChild('treeview') treeview: IntegralUITreeView;

    public items: Array<any> = [];
    public title: string="Chart Demo";

    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false;
    private editTimeout: any = null;
    
    public ctrlStyle: any = {
        general: {
            normal: 'trw-lbl-edit'
        }
    }

    public treeDataFields: any = {
        text: 'LITERAL'
    }

    private sampleData: Array<any> = [];

    constructor(){
        this.sampleData = [
            { 
                expanded: false,
                id: 1,
                LITERAL: "Favorites",
                allowEdit: false,
                items: [
                    { id: 11, pid: 1, LITERAL: "Desktop" },
                    { id: 12, pid: 1, LITERAL: "Downloads" }
                ]
            },
            { 
                id: 2,
                LITERAL: "Libraries",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        LITERAL: "Documents", 
                        allowEdit: false,
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, LITERAL: "My Documents" },
                            { id: 212, pid: 21, LITERAL: "Public Documents" }
                        ]
                    },
                    { id: 22, pid: 2, LITERAL: "Music" },
                    { id: 23, pid: 2, LITERAL: "Pictures" },
                    { id: 24, pid: 2, LITERAL: "Videos" }
                ]
            },
            { 
                id: 3,
                LITERAL: "Computer",
                expanded: false,
                items: [
                    { id: 31, pid: 3, LITERAL: "Local Disk (C:)" },
                    { id: 32, pid: 3, LITERAL: "Storage (D:)" }
                ]
            },
            { id: 4, LITERAL: "Network" },
            { id: 5, LITERAL: "Recycle Bin" }
        ];
    }

    ngAfterViewInit(){
        this.treeview.loadData(this.sampleData, null, this.treeDataFields, false);
    } 

    ngOnDestroy(){
        this.cancelEditor();
    }

    // Selects the whole text in the text editor
    selectContent(e: any){
        if (e.target){
            setTimeout(function(){
                e.target.setSelectionRange(0, e.target.value.length);
            }, 1);
        }
    }

    showEditor(e: any, item: any){
        if (e.buttons == 1 && item.allowEdit != false){
            let self = this;

            self.editTimeout = setTimeout(function(){
                if (self.editTimeout){
                    self.originalText = item.LITERAL;
                    self.isEditActive = true;
                    self.editItem = item;
                    self.editorFocused = true;
                }

                clearTimeout(self.editTimeout);
            }, 250);

        }
    }

    cancelEditor(){
        if (this.editTimeout)
            clearTimeout(this.editTimeout);

        this.editTimeout = null;
    }

    closeEditor(){
        if (this.editItem)
            this.editItem.allowDrag = true;
            
        this.editItem = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        if (this.editItem){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editItem.LITERAL = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editItem)
            this.editItem.LITERAL = this.originalText;

        this.closeEditor();
    }

    public scrollToItem(aText: string){
        //let item: any = this.treeview.findItemById(item.itemID);
        let item: any = this.treeview.findItemByText(aText);
        if (item){
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeview.scrollTo(item);
    
            // Select the item once it is present in current view
            this.treeview.selectedItem = item;
        }
    }   
}
