import * as pug from 'pug';
import * as fs from 'fs';
import * as path from 'path';

const views_dir = path.resolve('.', 'src', 'views');
const public_dir = path.resolve('.', 'public');

fs.readdirSync(views_dir)
  .forEach(file => {
  const filename = path.resolve(views_dir, file);

  const html = pug.compileFile(filename, {
    filename, pretty: true,
    doctype: 'html',
  })({ basedir: path.join(views_dir, '..') });

  const filename_to_write = path.join(public_dir, file)
    .replace('.pug', '.html');

  fs.writeFile(filename_to_write, html, (err) => {
    if (err) throw err;
    console.log('writed', filename_to_write);
  });

});
