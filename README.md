# 🏢 Composition over inheritance

The purpose of this repository is exploring the composition capabilities in TS
and how it can be used to solve architectural problems that might be problematic
using an approach based on inheritance.

<p align="center">
  <img width=350 src="./assets/composition.png" >
<p>

# 📝 Notes

## File extensions on imports

This project is created to be used with Deno, that's why all imports must include the file extension.

```ts
import { Screen } from './Screen'; // ES6 regular import
import { Screen } from './Screen.ts'; // Import using Deno
```

Visit https://deno.land/manual/examples/import_export for further information.
