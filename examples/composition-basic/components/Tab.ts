export class Tab {
  private name: string;

  constructor(tabName: string) {
    this.name = tabName;
  }
  press() {
    console.log(`Tab ${this.name} pressed`);
  }
}
