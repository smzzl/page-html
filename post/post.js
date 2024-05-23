import config from './config.js';


const newsListElement = document.getElementById('news-list');
const metaFilePath = config.news_file; // 你的meta.json文件路径

// 读取并解析meta.json文件
fetch(metaFilePath)
.then(response => response.json())
.then(newsItems => {
    // 根据date对新闻进行排序
    const sortedNewsItems = newsItems.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // 降序排序
    });

    let addedYear = {};
    // 构建新闻条目的HTML
    sortedNewsItems.forEach(newsItem => {
        const year = new Date(newsItem.date).getFullYear();
        var yearornot = year;
        if (addedYear[year]) {
            yearornot = ""
        }else{
            addedYear[year] = true;
        }
        const newsItemHTML = `
        <div class=row>
          <div class=col-lg-12>
            <div class=row id=talk_list>
              <div class=col-lg-2>
                <h3>${yearornot}</h3>
              </div>
              <div class=col-lg-10>

                <div class="media stream-item view-compact">
                <div class="media-body">
                    <div class="section-subheading article-title mb-0 mt-0">
                    <a href="">${newsItem.title}</a>
                    </div>
                    <a href="" class="summary-link">
                    <div class="article-style">
                        <p>${newsItem.content}</p>
                    </div>
                    </a>
                    <div class="stream-meta article-metadata">
                    <div class="article-metadata">
                        <span class="article-date">${year}年${new Date(newsItem.date).getMonth()}月${new Date(newsItem.date).getDate()}日</span>
                    </div>
                    </div>
                </div>
                <div class="ml-3">
                    <a href="../post/${newsItem.date.replace(/\./g, '-')}"> <!-- 替换日期格式以符合URL -->
                    <img src="${newsItem.img}" height="80" width="100" alt="${newsItem.title}" loading="lazy">
                    </a>
                </div>

              </div>
            </div>
          </div>
        </div>    

`;
        newsListElement.innerHTML += newsItemHTML;
    });
})
.catch(error => {
    console.error('Error loading news items:', error);
});