#!/bin/sh
DOCUMENT_ROOT=/var/www/sources

# Take site offline
echo "Taking site offline..."
touch $DOCUMENT_ROOT/maintenance.file

# Swap over the content
echo "Deploying content..."
mkdir -p $DOCUMENT_ROOT/Bitchute
cp BitchuteIcon.png $DOCUMENT_ROOT/Bitchute
cp BitchuteConfig.json $DOCUMENT_ROOT/Bitchute
cp BitchuteScript.js $DOCUMENT_ROOT/Bitchute
sh sign.sh $DOCUMENT_ROOT/Bitchute/BitchuteScript.js $DOCUMENT_ROOT/Bitchute/BitchuteConfig.json

# Notify Cloudflare to wipe the CDN cache
echo "Purging Cloudflare cache for zone $CLOUDFLARE_ZONE_ID..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"files":["https://plugins.grayjay.app/Bitchute/BitchuteIcon.png", "https://plugins.grayjay.app/Bitchute/BitchuteConfig.json", "https://plugins.grayjay.app/Bitchute/BitchuteScript.js"]}'

# Take site back online
echo "Bringing site back online..."
rm $DOCUMENT_ROOT/maintenance.file
