<template>
  <!-- Start Colored Codes Background -->
  <div
    class="fixed marqueeY px-7 absolute top-0 w-full gap-20 opacity-20 select-none flex flex-col gap-12 vertical-text items-start overflow-hidden"
  >
    <p
      v-for="code in coloredCodes"
      v-html="code"
      class="text-gray/50 text-lg -scale-100"
    ></p>
  </div>
  <!-- End Colored Codes Background -->
</template>

<script>
export default {
  data() {
    return {
      elements: `
        <header class="flex items-center">
          <img src="logo.png" class="w-18" alt="Mehdi Rafiei Persoanl Website Logo" />
          <Item><nuxt-link href="/">Home</nuxt-link></Item>
          <Item><nuxt-link href="/about">About</nuxt-link></Item>
          <Item><nuxt-link href="/works"> Portfolio</nuxt-link></Item>
          <Item><nuxt-link href="/contact_me"> Contact</nuxt-link></Item>

          <a href="Mehdi_Rafiee-Resume.pdf" title="Download Mehdi Rafiei Resume (PDF)"> Resume </a>

          <themeswitch class="moon">Dark/Light</themeswitch>
          <langswitch class="en">en/fa</langswitch>
        </header>

        <initilizecontent class="content">Hello World - I'm Mehdi Rafiei</initilizecontent>

        <myname is="Mehdi Rafiei" />

        <jobtitle is="Front-End Developer" />

        <portfolios are="ready" number="8" />

        <experience years="more than 6" />

        <birthdate year="1998" month="july" day="11" />

        <skills :list="['NUXT', 'Vue', 'React', 'Next', 'Javascript']" />

        <contactDetails :list="['info@mehdicode.com', 'linkedin.com/in/merafiee', 'github.com/mehdicodecom']" />
        `,
    };
  },
  computed: {
    coloredCodes() {
      //Convert Each line of elements into one array item and clear whitespaces and empty lines
      const elementArray = this.elements
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "");

      //Separate each part of elements with Regex based on uses and give specific color
      elementArray.forEach((html, index) => {
        elementArray[index] = this.colorizeHTML(html);
      });
      return elementArray;
    },
  },
  methods: {
    colorizeHTML(html) {
      //Regex to separate each part of an HTML Element into different parts (Tag Names, Attribute Names, Signs)
      const regex =
        /(\b(\w+)\s*(?=\=))|((?<=\<)([a-z]{1,20})(?=\>)*|(?<=\<\/)([a-z]{1,20})(?=\>)*)|(<\/|>|<|\/>|="|")/g;
      html = html.replace(regex, (match, g1, g2, g3) => {
        if (g1 || g2)
          return `<span class="text-main-orange">${g1 || g2}</span>`;
        if (g3) return `<span class="text-main-green">${g3}</span>`;
        switch (match) {
          case "</": {
            return `<span class="text-main-cyan">&lt;/</span>`;
          }
          case "/>": {
            return `<span class="text-main-cyan">/&gt;</span>`;
          }
          case ">": {
            return `<span class="text-main-cyan">&gt;</span>`;
          }
          case "<": {
            return `<span class="text-main-cyan">&lt;</span>`;
          }
          case `="`: {
            return `<span class="text-main-cyan">&equals;"</span>`;
          }
          case `"`: {
            return `<span class="text-main-cyan">"</span>`;
          }
        }
      });
      return html;
    },
  },
};
</script>

<style scoped>
test {
}
</style>
