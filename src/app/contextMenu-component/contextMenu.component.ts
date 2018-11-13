import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'contextMenu',
    encapsulation: ViewEncapsulation.None, 
    // without encapsulation, you will only see the default contextmenu.css file
    //and all the changes in contextMenu.compnent.scss (i.e. icons) will be ignored.
    templateUrl: './contextMenu.component.html',
    styleUrls: ['./contextMenu.component.scss']    

})

export class ContextMenuComponent {

     // Get a reference of application view
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;

    public ctrlStyle: any = {
        general: {
            normal: 'leftDiv'
        }
    }

    // ContextMenu settings
    private menuSettings = {
        appRef: null,
        items: []
    }

    // Font settings that are applied to the block element

    private fontWeight = 'bold';
    private fontStyle = 'normal';
    private fontSize = '1';
    private textDecoration = 'none';

    constructor(){}

    // Initialize items after application view is initialized
    ngAfterViewInit(){
        this.menuSettings = {
        appRef: this.applicationRef,
            items: [
                { id: 2, text: "Bold", icon: 'icons-medium check-mark', checked: true },
                { id: 3, text: "Italic", icon: 'icons-medium empty' },
                { id: 4, text: "Strikethrough", icon: 'icons-medium empty' },
                { id: 5, type: "separator" },
                { id: 6, text: "x1", icon: 'icons-medium radio-mark-filled' },
                { id: 7, text: "x1.5", icon: 'icons-medium radio-mark-empty' },
                { id: 8, text: "x2", icon: 'icons-medium radio-mark-empty' }
            ]
        }
    }

    

    // Handle clicks from menu items. Depending on their id, a different action is executed
    menuItemClick(e){
        if (e.item){
            if (e.item.id < 5)
                e.item.checked = e.item.checked != undefined ? !e.item.checked : true;
            else
                e.item.checked = true;

            switch (e.item.id){
                case 2:
                    this.fontWeight = e.item.checked != false ? 'bold' : 'normal';
                    break;
                case 3:
                    this.fontStyle = e.item.checked != false ? 'italic' : 'normal';
                    break;
                case 4:
                    this.textDecoration = e.item.checked != false ? 'line-through' : 'none';
                    break;
                case 6:
                    this.fontSize = e.item.checked != false ? '1' : '1';
                    break;
                case 7:
                    this.fontSize = e.item.checked != false ? '1.5' : '1';
                    break;
                case 8:
                    this.fontSize = e.item.checked != false ? '2' : '1';
                break;
            }        

            if (e.item.id < 5)
                e.item.icon = e.item.checked != false ? 'icons-medium check-mark' : 'icons-medium empty';
            else {
                for (let i = 4; i < this.menuSettings.items.length; i++){
                    if (this.menuSettings.items[i] != e.item)
                    this.menuSettings.items[i].checked = false;
                    this.menuSettings.items[i].icon = this.menuSettings.items[i].checked != false ? 
                        'icons-medium radio-mark-filled' : 'icons-medium radio-mark-empty';
                }
            }
        }
    }
}
