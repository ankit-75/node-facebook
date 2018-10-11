########### CREATE WAVE FILE ########
sox -d -b 16 -c 1 -r 16k sample23.wav



WIT.AI

############ AUDIO TO TEXT ##########
curl -XPOST 'https://api.wit.ai/speech?v=20170307'    -i -L    -H "Authorization: Bearer ISO5VCEHIIYCMCWNGOPOMF74BWGP7OCQ"    -H "Content-Type: audio/wav"    --data-binary "@sample.wav"
