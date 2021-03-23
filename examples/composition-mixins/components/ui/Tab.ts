export class Tab {
  constructor(private name: string) { }
  
  press() {
    console.log(`👉 Tab '${this.name}' pressed`);
  }
}
