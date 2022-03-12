import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent {
  public pageLinkSize = 5;

  public pageLinks: number[] = [];

  @Input() public page = 1;
  @Input() public pagesCount = 0;
  @Output() public onPageChange = new EventEmitter<{ page: number }>();

  public isFirstPage(): boolean {
    return this.page === 0;
  }

  public isLastPage(): boolean {
    return this.page === this.pagesCount - 1;
  }

  public ngOnChanges(): void {
    this.pageLinks = [];
    const [start, end] = this.calculatePageLinkBoundaries();

    for (let i = start; i <= end; ) {
      this.pageLinks.push(++i);
    }
  }

  private calculatePageLinkBoundaries(): number[] {
    const numberOfPages = this.pagesCount;
    const visiblePages = Math.min(this.pageLinkSize, numberOfPages);

    // calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
    const end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    // check when approaching to last page
    const delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  }

  public changePageToPrev(): void {
    this.changePage(this.page - 1);
  }

  public changePageToNext(): void {
    this.changePage(this.page + 1);
  }

  public onPageLinkClick(page: number): void {
    this.changePage(page);
  }

  private changePage(page: number): void {
    if (page >= 0 && page < this.pagesCount) {
      this.ngOnChanges();
      this.onPageChange.emit({ page });
    }
  }
}
