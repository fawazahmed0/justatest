import sys

from googletrans import Translator
translator = Translator()
print(vars(translator.translate('안녕하세요.')))
