import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data/data.service';
import {Post} from '../Post';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable,MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dataSource: any = [];
  @ViewChild('paginator') paginator: MatPaginator;
  
  constructor(private dataService: DataService, public dialog: MatDialog,public auth: AuthService) {
   
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
      this.dataSource = this.dataService;
         
    });
  }
  deletePost(id) {
    
    this.dataService.deletePost(id);
    console.log(this.dataService.dataLength.length);
    this.dataSource = new PostDataSource(this.dataService);
      
  }
  ngAfterViewInit(): void{
    //this.dataSource=this.dataService.paginatorr;
    this.dataService.getData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    })
}
 
  ngOnInit(): void {
    
  }
  
  displayedColumns = ['id', 'date_posted', 'from', 'to', 'category', 'delete'];
  //dataSource = new PostDataSource(this.dataService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
    
  }

  disconnect() {
  }

}
function ngOnInit(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

