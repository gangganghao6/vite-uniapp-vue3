import QQMapWX from "./qqmap-wx-jssdk";
import promisify from "./promisify";

export const qqmapsdk = new QQMapWX({
  key: "S4QBZ-4O3KU-5OTVV-GL24V-K27Q6-4CBE5",
});
export let mapInstance = null;

export function initMap(map) {
  mapInstance = map;
}

export async function moveTo({ latitude, longitude }) {
  return promisify(
    mapInstance.moveToLocation,
    mapInstance
  )({
    latitude,
    longitude,
  });
}

export async function refreshLocationStr({ latitude, longitude }, location) {
  const result = await pointToStr({ latitude, longitude });
  location.value = [
    {
      name: result.result.ad_info.province,
      code: result.result.ad_info.adcode.slice(0, 2) + "0000",
    },
    {
      name: result.result.ad_info.city,
      code: result.result.ad_info.adcode.slice(0, 4) + "00",
    },
    {
      name: result.result.ad_info.district,
      code: result.result.ad_info.adcode,
    },
  ];
}

export async function getCurrentPoint() {
  return await promisify(uni.getLocation)({
    type: "gcj02",
  });
}

export async function pointToStr({ latitude, longitude }) {
  return await promisify(
    qqmapsdk.reverseGeocoder,
    qqmapsdk
  )({
    location: {
      latitude,
      longitude,
    },
  });
}

export async function strToPoint(str) {
  const result = (
    await promisify(
      qqmapsdk.geocoder,
      qqmapsdk
    )({
      address: str,
    })
  ).result.location;
  return {
    latitude: result.lat,
    longitude: result.lng,
  };
}

export async function goTo(store) {
  await uni.openLocation({
    ...store,
  });
}
