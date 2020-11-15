import * as sass from 'node-sass';
import * as fs from 'fs';
import * as path from 'path';

const file = path.resolve('.', 'src', 'scss', 'styles.scss');

sass.render({ file, outputStyle: 'compact' }, (err, res) => {
  if (err) throw err;
  
  const filename = path.resolve('.', 'public', 'styles.css');
  const css = res.css.toString();

  fs.writeFile(filename, css, {}, (err1) => {
    if (err1) throw err1;
    console.log('writed', filename);
  });

});
