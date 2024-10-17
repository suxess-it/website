"use strict";(self.webpackChunkkubrix=self.webpackChunkkubrix||[]).push([[16],{7160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(4848),r=n(8453);const s={title:"Local Environment",sidebar_label:"Local Environment",keywords:["kubrix","internal developer platform","installation","k3d","local environment"],tags:["Install","Sandbox"],image:"website/static/img/kubrix_logo.png"},a="Create a kubriX test environment on your local machine",l={id:"install-local",title:"Local Environment",description:"prereqs",source:"@site/docs/install-local.mdx",sourceDirName:".",slug:"/install-local",permalink:"/docs/install-local",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Install",permalink:"/docs/tags/install"},{inline:!0,label:"Sandbox",permalink:"/docs/tags/sandbox"}],version:"current",frontMatter:{title:"Local Environment",sidebar_label:"Local Environment",keywords:["kubrix","internal developer platform","installation","k3d","local environment"],tags:["Install","Sandbox"],image:"website/static/img/kubrix_logo.png"},sidebar:"docs",previous:{title:"Codespaces",permalink:"/docs/install-codespace"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},o={},c=[{value:"prereqs",id:"prereqs",level:2},{value:"mkcert",id:"mkcert",level:3},{value:"create GitHub OAuth App",id:"create-github-oauth-app",level:3},{value:"1. define some variables for the installation",id:"1-define-some-variables-for-the-installation",level:2},{value:"2. install platform-stack",id:"2-install-platform-stack",level:2},{value:"3. log in to the tools",id:"3-log-in-to-the-tools",level:2},{value:"4. kubecost",id:"4-kubecost",level:2},{value:"5. keycloak",id:"5-keycloak",level:2},{value:"6. Onboard teams and applications",id:"6-onboard-teams-and-applications",level:2},{value:"7. Promote apps with Kargo",id:"7-promote-apps-with-kargo",level:2},{value:"delete k3d cluster",id:"delete-k3d-cluster",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"create-a-kubrix-test-environment-on-your-local-machine",children:"Create a kubriX test environment on your local machine"})}),"\n",(0,i.jsx)(t.h2,{id:"prereqs",children:"prereqs"}),"\n",(0,i.jsx)(t.p,{children:"k3d installed\nkubectl installed"}),"\n",(0,i.jsx)(t.h3,{id:"mkcert",children:"mkcert"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"curl -L -O https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-linux-amd64\nmv mkcert-v1.4.4-linux-amd64 ~/bin/mkcert\nchmod u+x ~/bin/mkcert\n"})}),"\n",(0,i.jsxs)(t.p,{children:["install the CA of mkcert in your OS truststore: ",(0,i.jsx)(t.a,{href:"https://docs.kubefirst.io/k3d/quick-start/install#install-the-ca-certificate-authority-of-mkcert-in-your-trusted-store",children:"https://docs.kubefirst.io/k3d/quick-start/install#install-the-ca-certificate-authority-of-mkcert-in-your-trusted-store"})]}),"\n",(0,i.jsx)(t.h3,{id:"create-github-oauth-app",children:"create GitHub OAuth App"}),"\n",(0,i.jsxs)(t.p,{children:["in your Github Organization for Backstage login: ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/auth/github/provider/",children:"https://backstage.io/docs/auth/github/provider/"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Homepage URL: ",(0,i.jsx)(t.a,{href:"https://backstage-127-0-0-1.nip.io",children:"https://backstage-127-0-0-1.nip.io"})]}),"\n",(0,i.jsxs)(t.li,{children:["Authorization callback URL: ",(0,i.jsx)(t.a,{href:"https://backstage-127-0-0-1.nip.io/api/auth/github",children:"https://backstage-127-0-0-1.nip.io/api/auth/github"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"use GITHUB_CLIENTSECRET and GITHUB_CLIENTID from your Github OAuth App for the following environment variables in step 1"}),"\n",(0,i.jsx)(t.h2,{id:"1-define-some-variables-for-the-installation",children:"1. define some variables for the installation"}),"\n",(0,i.jsx)(t.p,{children:"For the installation some variables are needed:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# Github clientsecret and clientid from GitHub OAuth App for Backstage\nexport KUBRIX_GITHUB_CLIENTSECRET=<value from steps above>\nexport KUBRIX_GITHUB_CLIENTID=<value from steps above>\n# Github token Backstage uses to get the catalog yaml form github\nexport KUBRIX_GITHUB_TOKEN=<your personal access token>\n# Github token ArgoCD uses for the SCM Provider\nexport KUBRIX_GITHUB_APPSET_TOKEN=<github-pat-for-argocd-appsets-only-read-permissions-needed>\n# set the current repository to the origin or to your fork\nexport KUBRIX_REPO=https://github.com/suxess-it/kubriX.git\n# if you want to test another branch, specify something else than main\nexport KUBRIX_REPO_BRANCH=main\n# username and password for ArgoCDs kubriX repository\nexport KUBRIX_REPO_USERNAME=<kubrix-repo-username>\nexport KUBRIX_REPO_PASSWORD=<kubrix-repo-password-or-token>\nexport KUBRIX_TARGET_TYPE=KIND-DELIVERY\n# if a K3d cluster should get created:\nexport KUBRIX_CREATE_K3D_CLUSTER=true\n"})}),"\n",(0,i.jsx)(t.h2,{id:"2-install-platform-stack",children:"2. install platform-stack"}),"\n",(0,i.jsx)(t.p,{children:"clone the upstream repo (or your personal fork) and optionally switch to specific branch"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git clone ${KUBRIX_REPO}\n# change to repo directory (if it is something else then kubriX, please change)\ncd kubriX\ncheckout ${KUBRIX_REPO_BRANCH}\n"})}),"\n",(0,i.jsx)(t.p,{children:"and install specific stack"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"./install-platform.sh\n"})}),"\n",(0,i.jsx)(t.p,{children:'With this command a new k3d cluster gets created.\nA "bootstrap argocd" get\'s installed via helm.\nA "boostrap-app" gets installed which references all other apps in the plattform-stack (app-of-apps pattern)\nArgoCD itself is also then managed by an argocd app.'}),"\n",(0,i.jsx)(t.p,{children:"The platform stack will be installed automagically ;)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"backstage"}),"\n",(0,i.jsx)(t.li,{children:"argocd (managed by argocd)"}),"\n",(0,i.jsx)(t.li,{children:"argo-rollouts"}),"\n",(0,i.jsx)(t.li,{children:"kargo"}),"\n",(0,i.jsx)(t.li,{children:"cert-manager"}),"\n",(0,i.jsx)(t.li,{children:"crossplane"}),"\n",(0,i.jsx)(t.li,{children:"kyverno"}),"\n",(0,i.jsx)(t.li,{children:"prometheus"}),"\n",(0,i.jsx)(t.li,{children:"grafana"}),"\n",(0,i.jsx)(t.li,{children:"promtail"}),"\n",(0,i.jsx)(t.li,{children:"loki"}),"\n",(0,i.jsx)(t.li,{children:"tempo"}),"\n",(0,i.jsx)(t.li,{children:"kubecost"}),"\n",(0,i.jsx)(t.li,{children:"keycloak"}),"\n",(0,i.jsx)(t.li,{children:"external-secret-operator"}),"\n",(0,i.jsx)(t.li,{children:"falco"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"3-log-in-to-the-tools",children:"3. log in to the tools"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Tool"}),(0,i.jsx)(t.th,{children:"URL"}),(0,i.jsx)(t.th,{children:"Username"}),(0,i.jsx)(t.th,{children:"Password"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Backstage"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://backstage-127-0-0-1.nip.io",children:"https://backstage-127-0-0-1.nip.io"})}),(0,i.jsx)(t.td,{children:"via github"}),(0,i.jsx)(t.td,{children:"via github"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ArgoCD"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://argocd-127-0-0-1.nip.io/",children:"https://argocd-127-0-0-1.nip.io/"})}),(0,i.jsx)(t.td,{children:"admin"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"kubectl get secret -n argocd argocd-initial-admin-secret -o=jsonpath='{.data.password}' | base64 -d"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Kargo"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://kargo-127-0-0-1.nip.io",children:"https://kargo-127-0-0-1.nip.io"})}),(0,i.jsx)(t.td,{children:"admin"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Grafana"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://grafana-127-0-0-1.nip.io",children:"https://grafana-127-0-0-1.nip.io"})}),(0,i.jsx)(t.td,{children:"admin"}),(0,i.jsx)(t.td,{children:"prom-operator"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Keycloak"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://keycloak-127-0-0-1.nip.io",children:"https://keycloak-127-0-0-1.nip.io"})}),(0,i.jsx)(t.td,{children:"admin"}),(0,i.jsx)(t.td,{children:"admin"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FalcoUI"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://falco-127-0-0-1.nip.io",children:"https://falco-127-0-0-1.nip.io"})}),(0,i.jsx)(t.td,{children:"admin"}),(0,i.jsx)(t.td,{children:"admin"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"4-kubecost",children:"4. kubecost"}),"\n",(0,i.jsxs)(t.p,{children:["initialization need some minutes until values are visible in UI - ",(0,i.jsx)(t.a,{href:"https://kubecost-127-0-0-1.nip.io/overview",children:"https://kubecost-127-0-0-1.nip.io/overview"})]}),"\n",(0,i.jsx)(t.h2,{id:"5-keycloak",children:"5. keycloak"}),"\n",(0,i.jsx)(t.p,{children:"depending on your hardware it needs some minutes until keycloak is running"}),"\n",(0,i.jsx)(t.h2,{id:"6-onboard-teams-and-applications",children:"6. Onboard teams and applications"}),"\n",(0,i.jsxs)(t.p,{children:["In our ",(0,i.jsx)(t.a,{href:"https://github.com/suxess-it/sx-cnp-oss/blob/main/backstage-resources/docs/ONBOARDING.md",children:"Onboarding-Documentation"})," we explain how new teams and apps get onboarded on the platform in a gitops way."]}),"\n",(0,i.jsx)(t.h2,{id:"7-promote-apps-with-kargo",children:"7. Promote apps with Kargo"}),"\n",(0,i.jsx)(t.p,{children:"tbd"}),"\n",(0,i.jsx)(t.h2,{id:"delete-k3d-cluster",children:"delete k3d cluster"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"k3d cluster stop kubrix-local-demo\nk3d cluster delete kubrix-local-demo\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);