import requests
import json
from bs4 import BeautifulSoup
from itertools import count


def crawl_content(url):
    req = requests.get(base_url+ url)
    page = BeautifulSoup(req.content, 'html.parser')
    title = page.find('h1').text
    content = [p.text for p in page.find('div', class_='articlebody').find_all('p')]
    return {'title': title, 'body': content}


def crawl_chapter(chapter):
    chapter = chapter.a
    href = chapter.attrs['href']
    with open('book/' + str(next(counter)) + '.txt', 'w', encoding='utf-8') as file:
        json.dump(crawl_content(href), file)


base_url = 'http://quanben-xiaoshuo.com'
menu = '/n/qingyunian/xiazai.html'
counter = count(start=1)

req = requests.get(base_url + menu)
soup = BeautifulSoup(req.content, 'html.parser')

for chapter in soup.find_all('li', {'itemprop': 'itemListElement'}):
    crawl_chapter(chapter)