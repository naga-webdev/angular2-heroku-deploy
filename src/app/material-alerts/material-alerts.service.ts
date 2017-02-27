import { Injectable } from '@angular/core';

import { MdSnackBar } from '@angular/material';
import {MdDialog} from '@angular/material';


@Injectable()
export class MaterialAlertsService {
    constructor(private snackBar:MdSnackBar,private dialog:MdDialog) { }

     openSnackBar(message: string) {
        let snackBarRef = this.snackBar.open(message, 'X' , {duration : 3000});
        snackBarRef.onAction().subscribe(() => {
            console.log('The snack-bar action was triggered!');
            snackBarRef.dismiss();
        });
    }

}