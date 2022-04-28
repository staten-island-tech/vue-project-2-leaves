<template>
  <div class="wild section" id="wild">
    <div class="part">
      <h4 class="sectionTitle">Wild Area</h4>
      <p class="text">
        The Wild Area (Japanese: ワイルドエリア Wild Area) is an extensive area
        in the Galar region. It adjoins several towns in the region. The Pokémon
        found in the Wild Area vary depending on the weather, which can vary
        wildly between the different subareas. Pokémon with higher levels also
        wander outside of the normal tall grass in many places. The areas north
        of the Motostoke River are home to Pokémon with higher levels overall.
        Once the player has started the Darkest Day or captured Eternatus,
        Pokémon found throughout the Wild Area will generally have higher
        levels. Unlike in most other areas in the game (which use a fixed
        perspective), in the Wild Area the player can control the camera using
        the right control stick. These mechanics, as well as the weather and
        wild Pokémon mechanics, carry over to the Isle of Armor and Crown
        Tundra.
      </p>
      <h5 class="sectionsubTitle">Location</h5>
      <p class="text">
        The Wild Area is composed of 18 subareas, which are grouped into two
        groups: The roughly rectangular South Wild Area has 10 subareas; and the
        long, roughly Y-shaped North Wild Area has 8 subareas. These groups are
        divided by the river that runs from west to east through the southern
        part of Motostoke, though a bridge allows passage between the south and
        north. The Town Map shows the rough layout of the Wild Area and relation
        of the subareas to one another, though the borders shown between them
        may diverge from in-game borders. Players first enter the Wild Area at
        its southernmost point, arriving at the Wild Area Station via train from
        Wedgehurst Station. Thereafter, players can return to the Wild Area via
        the Wild Area Station as well as a number of Flying Taxi destinations.
      </p>
      <h5 class="sectionsubTitle">Weather</h5>
      <p class="text">
        The weather in the Wild Area determines which wild Pokémon can appear
        and, in some cases, which weather conditions and terrain appear in
        battle. The weather varies between subareas, and while neighboring
        subeareas can share the same weather, the weather in each is
        independently determined. However, since symbol encounters and wanderers
        spawn based on the weather currently experienced by players, it is
        possible for the weather of one subarea to affect these spawns in
        another subarea if players are near the border between them. The weather
        across the entire Wild Area changes each day at midnight, based on the
        console's clock. Common weather conditions include Clear, Cloudy, and
        Rain. If any subareas on a given day have one of the rarer weather
        conditions (such as Thunderstorm, Blizzard, Sandstorm, or Fog), the X
        menu will announce that these conditions are present. On certain special
        dates, the whole Wild Area will have the same weather. These dates are
        typically the first of a month.
      </p>
      <h5 class="sectionsubTitle">Prerequisites</h5>
      <p class="text">
        Some weather conditions will only begin to appear in the Wild Area after
        players have reached certain milestones in the game. Before players have
        unlocked these weather conditions, subareas that would have had them
        instead have a specific replacement weather condition. These replacement
        conditions are changed to the original condition immediately after
        players reach the appropriate milestone, even if the weather would not
        yet have reset otherwise.
      </p>

      <p class="source">
        Sources from https://bulbapedia.bulbagarden.net/wiki/Wild_Area
      </p>
    </div>
    <img
      src="https://cdn.mos.cms.futurecdn.net/gqi9P9kBKzDLsva2rffagn-1200-80.jpg"
      alt=""
      class="wildImg"
    />
  </div>
</template>

<script>
export default {
  name: "Wild",
};
</script>

<style>
.wild {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.part {
  flex-basis: 40%;
}
.wildImg {
  height: 600px;
  width: 800px;
  object-fit: cover;
}
</style>