player.onItemInteracted(IRON_SWORD, function () {
    player.tell(mobs.target(LOCAL_PLAYER), "You have used Wither Impact for 400 Mana")
    player.teleport(posCamera(0, player.getOrientation(), 8))
    mobs.spawn(EXPLOSION_HUGE, posCamera(0, 0, 8))
    mobs.spawn(PRIMED_TNT, posCamera(0, 0, 8))
})
