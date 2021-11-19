import json
from collections import OrderedDict

list = OrderedDict()

# list["name"] = [
#       "", "", "", "", "", "", "", "강남R", "한강진역R", "한남동R", "천호로데오", "문정법원로R"]
# list["addr"] = [
#      , "", "", ", "", "", ")", "서울특별시 강남구 강남대로 390 (역삼동)", "서울특별시 용산구 이태원로 252 (한남동)", "서울특별시 용산구 독서당로 94 (한남동)", "서울특별시 강동구 천호대로 1037 (천호동)", "서울특별시 송파구 송파대로 201 (문정동)"]

list = [{
    'name': '여의도공원R',
    'addr': '서울특별시 영등포구 여의공원로 101 (여의도동)'
}, {
    'name': '더현대서울',
    'addr': '서울특별시 영등포구 여의대로 108 (여의도동)'
}, {
    'name': '여의도신한금융투자타워',
    'addr': '서울특별시 영등포구 여의대로 70 (여의도동)'
}, {
    'name': '보라매공원R',
    'addr': '서울특별시 동작구 보라매로5길 35 (신대방동, 파크스퀘어,보라매현대APT)'
}, {
    'name': '관악서울대입구R',
    'addr': '서울특별시 관악구 관악로 158 (봉천동)'
}, {
    'name': '이수역',
    'addr': '서울특별시 서초구 동작대로 112 (방배동)'
}, {
    'name': '사당',
    'addr': '서울특별시 관악구 남부순환로 2082-25'
}, {
    'name': '파미에파크R',
    'addr': '서울특별시 서초구 사평대로 205 (반포동) CENTRALCITY'
}, {
    'name': '강남대로논현R',
    'addr': '서울특별시 서초구 강남대로85길 5 (반포동)'
}, {
    'name': '강남교보타워R',
    'addr': '서울특별시 서초구 강남대로 465 (서초동)'
}]
# Print JSON
print(json.dumps(list, ensure_ascii=False, indent="\t"))

# Write JSON
with open('address.json', 'w', encoding="utf-8") as make_file:
    json.dump(list, make_file, ensure_ascii=False, indent="\t")
