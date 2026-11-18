import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../../src/production.js',import.meta.url),'utf8');
const {productionBuild,productionMarkdown,productionPresets}=await import('data:text/javascript;base64,'+Buffer.from(source+'\nexport {productionBuild,productionMarkdown,productionPresets};').toString('base64'));
test('photo output is one still, without duration or camera motion',()=>{
  const p=productionBuild({...productionPresets.product,duration:9,motion:'Slow push-in'});
  assert.equal(p.durationSeconds,null);assert.equal(p.cameraMovement,'');assert.match(p.directPrompt,/single editorial photograph in 4:5/);assert.doesNotMatch(p.directPrompt,/push-in|9-second/);
});
test('video output includes target duration, motion, and final frame',()=>{
  const p=productionBuild(productionPresets.film);
  assert.equal(p.durationSeconds,8);assert.match(p.directPrompt,/8-second shot/);assert.match(p.directPrompt,/Slow push-in/);assert.match(p.directPrompt,/end with/);
});
test('reference handoff requires separately attached media',()=>{
  const p=productionBuild(productionPresets.reference);const md=productionMarkdown(p);
  assert.equal(p.reference.embedded,false);assert.equal(p.reference.required,true);assert.match(md,/approved-portrait.png/);assert.match(md,/stop before generation/);assert.match(md,/cannot produce/);
});
test('brief generation builds no scene for empty input; rejects invalid duration',()=>{
  assert.equal(productionBuild({scene:'   '}).directPrompt,'');
  for(const duration of [2,16,6.5,''])assert.equal(productionBuild({medium:'video',scene:'A lake',duration}).durationSeconds,null);
});
test('client content with backticks cannot prematurely close its Markdown block',()=>{
  const md=productionMarkdown(productionBuild({title:'A ``` title',scene:'A ``` scene'}));assert.match(md,/````text\nA ``` title\n````/);assert.match(md,/````text\nCreate/);
});
