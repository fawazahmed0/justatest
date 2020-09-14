import sys
import json
# Refer https://github.com/ssut/py-googletrans to see examples on how to use this package
from googletrans import Translator
translator = Translator()
# https://stackoverflow.com/a/52372390
sys.stdout.reconfigure(encoding='utf-8')

print("hello")


sys.stdout.write(json.dumps(vars(translator.translate('안녕하세요.'))))
