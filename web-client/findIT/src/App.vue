<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background: none;
}

/* Firefox fix - https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */
button::-moz-focus-inner {
  padding: 0;
  border: none;
}

/* We're using :-moz-focusring rather than :focus so that we
	 don't change the default focus in other browsers. If you
	 set your own focus styles for buttons, you might drop the
	 :-moz-focusring part. */
button:-moz-focusring {
  outline: 1px dotted;
}

body {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', cursive;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 48px 20px 48px;
  min-width: 300px;
  margin-top: 16px;
}
</style>
