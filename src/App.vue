<template>
  <div id="app">
    <div class="wrapper">
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

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
  text-decoration: none;
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
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  background: #fff8e6;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 24px;
}
.wrapper {
  min-height: 100%;
  overflow: hidden;
}
.__container {
  box-sizing: content-box;
  padding: 0px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

body::-webkit-scrollbar,
div::-webkit-scrollbar {
  width: 0.5em;
  background-color: #dfe0df;
}

body::-webkit-scrollbar-thumb,
div::-webkit-scrollbar-thumb {
  background-color: #ffbb85;
  border: 3px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
