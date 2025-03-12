function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aGsWRUTFrE":
        Script1();
        break;
      case "5V7H0WkUtPN":
        Script2();
        break;
      case "5ioBngIg3pL":
        Script3();
        break;
      case "5w1aTTT8pCD":
        Script4();
        break;
      case "5idL7q7OWna":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6IptzmwkdJ1');
const duration = 250;
const easing = 'ease-out';
const id = '68FmxwHqMdY';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6gY26BhXWJN');
const duration = 250;
const easing = 'ease-out';
const id = '63SdXizQDlU';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6p49MpAAe3a');
const duration = 250;
const easing = 'ease-out';
const id = '6HUSyL4t74l';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('69w7URzj94J');
const duration = 250;
const easing = 'ease-out';
const id = '6Dv3lKoTB6Y';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5puJtCdlEIZ');
const duration = 250;
const easing = 'ease-out';
const id = '68w2AcWUzgl';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
