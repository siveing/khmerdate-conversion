
# khmerdate-conversion

Installation
------------

```bash
npm i khmerdate-conversion
```

```bash
pnpm i khmerdate-conversion
```

```bash
yarn add khmerdate-conversion
```

Usage
------------
```
import KhmerDateConversion from 'khmerdate-conversion';

const date = new Date();
const dateKhmer = KhmerDateConversion(date, 'LLL');
const dateKhmer1 = KhmerDateConversion('2002-08-06', 'LL');
const dateKhmer2 = KhmerDateConversion('2002-08-06', 'L');

<p>{dateKhmer}</p>
```

Testing
--------------
You can run the command `yarn test` to check the mocha testing. 

You can run the example by in `cd example` 
And run the command `yarn && yarn dev`.



Support
--------------
Pull requests and new issues are of course welcome. If you have any questions, comments or feedback you can contact us by email at siveing.huyy@gmail.com. We will try to answer your questions, but we have limited manpower so please, be patient with us.
