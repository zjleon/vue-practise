### code
[aliyun](https://code.aliyun.com/43747-cnsower-git/fms3-frontend?spm=a2111a.8458726.0.0.6c6c3531FRe9ro)
* use vscode
* typescript
* less

#### local env
##### lauch chrome with:
1. ubuntu: ``google-chrome --unsafely-treat-insecure-origin-as-secure=https://localhost --allow-insecure-localhost --ignore-certificate-errors``
2. windows:
3. After launched, enable cache in the network panel and debug the service worker using the ``application-service worker``

##### config nginx:
1. go into this folder via terminal, type ``pwd``
1. sudo vim ``sudo vim /etc/nginx/nginx.conf``
1. add ``include /home/jian/fms3/configs/nginx/local.conf;`` into the http block
1. uncomment ``#gzip  on;``

### requirements, tasks, defects
[rdc](https://rdc.aliyun.com/project/251456/sprint?spm=a2c40.cloud_prod_task_list.0.0.wZsB2j#)


