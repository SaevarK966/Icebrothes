# Meetings

Þessi mappa heldur utan um **hrá fundargögn** fyrir Icebrothes fundi.

Hugmyndin er einföld:

1. Nýr fundur er fyrst skráður sem `.txt` skrá hér inni
2. Úr þeirri skrá er síðan útbúin full HTML fundargerð
3. Loks er nýja fundargerðin bætt inn á `fundir.html`

## Ráðlögð uppsetning

- `IcebrothesFundagerd_Template.txt`
- `Fundagerðir/YYYY-MM-DD.txt`
- `Images/`

Dæmi:

- `Fundagerðir/2026-04-13.txt`
- `Fundagerðir/2026-04-14.txt`

## Hvernig á að nota þetta

1. Afritaðu `IcebrothesFundagerd_Template.txt`
2. Vistaðu nýju skrána inni í `Fundagerðir/` eftir dagsetningu fundar
3. Fylltu inn fundarupplýsingarnar
4. Láttu mig svo umbreyta henni í:
   - fulla fundargerðarsíðu
   - nýjan link á `fundir.html`
   - nýjustu röð í archive-inu ef fundurinn á að birtast þar

## Athugasemd

HTML skjölin sem birtast á síðunni eru nú:

- `fundargerd-snidmat.html`
- `fundargerd-2026-04-13.html`

`.txt` skrárnar hér eru því **vinnugögn**, ekki endanleg archive skjöl.

`Fundagerðir/` er source of truth fyrir nýjar fundarskrár sem á eftir að umbreyta yfir í HTML.
