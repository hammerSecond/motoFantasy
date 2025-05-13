
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/create"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 122669, hash: 'ba4399338706d3aa2152443041b16d50d980e4604dd53222ba85a23759cb48f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'f88e9572410db2fda39335c90abffcb40219c194e3eb5fcfd91b788700782736', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 134883, hash: '9b7b827efd69f5fb5aee4e7ce16e249a9df76bd8e569208792e014080f82a82a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 130496, hash: '150fa7a913a011a7041d959e0ef3695f0ca56ef1a368d3952fd645f33c4f3711', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 135700, hash: '44423ec16e13cecec29501a697bd58532a8e6fc3683de6b2f4535431a2d789ad', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'create/index.html': {size: 137759, hash: '083aada2feb600893693dac4e46441e34f2b485c725020be5af0bbdca55314ad', text: () => import('./assets-chunks/create_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 135440, hash: '9ad59fdfbeacfe4abbe1ca38055221f7bb044ee347cb20e019ade061e5695b18', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-723NKC5D.css': {size: 690180, hash: 'CTXuBLExxPg', text: () => import('./assets-chunks/styles-723NKC5D_css.mjs').then(m => m.default)}
  },
};
