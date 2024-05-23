添加团队成员：
    python people/people_detail_info_generator.py  --name=zlzhu --img_path=avatar.jpg --short_description="a 2024 student" --git=smzzl --emali=318611006@qq.com --personal_link=https://smzzl.github.io > out.html

    --img_path: avatar.jpg可以是任意图片文件名，存储在/author/${--name}/avatar.jpg
    --personal_link: 可以是一个网址（git主页，google-scholar主页），或者空。默认使用/author/${--name}/index.html。