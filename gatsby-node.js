const path = require(`path`);
const puppeteer = require("puppeteer");
const { galleryNames, projectsNames } = require("./src/content/pagesNames");
 
exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  if (stage === 'build-javascript') {
    const baseConfig = getConfig();
    const config = {
      ...baseConfig,
      ...{
        output: {
          ...baseConfig.output,
          publicPath: '/vegsci/',
        },
      },
    };
    actions.replaceWebpackConfig(config);
  }
  };

exports.createPages = ({ actions: { createPage } }) => {
  projectsNames.forEach(projectItem => {
    createPage({
      path: projectItem,
      component: path.resolve(`./src/templates/projectDetail.js`),
      context: {
        slug: projectItem,
        title: projectItem,
        imgsRegex: `/${projectItem}_/`
      }
    });
  });
  galleryNames.forEach(galleryItem => {
    createPage({
      path: `gallery-${galleryItem}`,
      component: path.resolve(`./src/templates/gallery.js`),
      context: {
        slug: `gallery-${galleryItem}`,
        title: galleryItem,
        imgsRegex: `/${galleryItem}_/`
      }
    });
  });
};

/* exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const getRoutes = page => {
    const routes = page.evaluate(() => {
      const titleNodeList = document.querySelector("body").innerText
      return titleNodeList;
    });
    return routes;
  };
  const create = async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
       const page = await browser.newPage();
      await page.goto(`https://www.sci.muni.cz/botany/vegsci/dbase/actualization-dates.php`);
      await page.waitForSelector("body");
      
      const dbData = await getRoutes(page);
      const nodeDbData = {
        key: 111,
        dbData: dbData,
      };
    
      const nodeContent = JSON.stringify(nodeDbData);
    
      const nodeMeta = {
        id: await createNodeId(`my-data-${nodeDbData.key}`),
        parent: null,
        children: [],
        internal: {
          type: `dbData`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: await createContentDigest(nodeDbData)
        }
      };
      await browser.close();
      return {nodeDbData, nodeMeta}
    } catch (err) {
      console.warn(err);
    }
  };
  const newNode = await create()
  await createNode(Object.assign({}, newNode.nodeDbData, newNode.nodeMeta))
}; */
