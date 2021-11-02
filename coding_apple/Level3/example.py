import json
from collections import OrderedDict

coffee_origin = OrderedDict()
coffee_taste = OrderedDict()

coffee_origin["name"] = "원산지 표기"
coffee_origin["country_list"] = ["브라질", "베트남", "콜롬비아",
                                 "에티오피아", "인도네시아", "케냐", "탄자니아", "자메이카", "코스타리카", "인도"]
coffee_origin["price"] = ["10000", "20000", "25000",
                          "30000", "40000", "15000", "10000", "30000", "20000", "40000"]

coffee_taste["body"] = ["풍부한 과일향", "부드럽고 순한 맛", "달콤함과 매운 맛", "맵고 깊은 맛", "너트 향"]
coffee_taste["acidity"] = ["★", "★★", "★★★", "★★★★", "★★★★★"]
coffee_taste["balance"] = ["★", "★★", "★★★", "★★★★", "★★★★★"]

coffee_origin["coffee_taste"] = coffee_taste
print(json.dumps(coffee_origin, ensure_ascii=False, indent="\t"))

# Write JSON
with open("origin.json", "w", encoding="utf-8") as make_file:
    json.dump(coffee_origin, make_file, ensure_ascii=False, indent="\t")
